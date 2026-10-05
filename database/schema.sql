CREATE TABLE IF NOT EXISTS kt_clubs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  invite_code VARCHAR(80) NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt_users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  club_id INT UNSIGNED NOT NULL,
  name VARCHAR(160) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('member','admin') NOT NULL DEFAULT 'member',
  active TINYINT NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (club_id) REFERENCES kt_clubs(id),
  INDEX (club_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt_sessions (
  token_hash CHAR(64) PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  expires_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES kt_users(id) ON DELETE CASCADE,
  INDEX (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt_questions (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  club_id INT UNSIGNED NOT NULL,
  source_key VARCHAR(60) NULL,
  category VARCHAR(160) NOT NULL,
  title VARCHAR(190) NOT NULL,
  subskills VARCHAR(255) NOT NULL DEFAULT '',
  level_1 TEXT NOT NULL,
  level_2 TEXT NOT NULL,
  level_3 TEXT NOT NULL,
  active TINYINT NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 0,
  FOREIGN KEY (club_id) REFERENCES kt_clubs(id),
  UNIQUE KEY source_per_club (club_id, source_key),
  INDEX (club_id, active, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt_assessments (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  assessor_id INT UNSIGNED NOT NULL,
  kind ENUM('self','admin') NOT NULL,
  status ENUM('draft','completed') NOT NULL DEFAULT 'draft',
  draft_key VARCHAR(100) NULL UNIQUE,
  average DECIMAL(4,3) NULL,
  comment TEXT NULL,
  started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME NULL,
  due_at DATE NULL,
  FOREIGN KEY (user_id) REFERENCES kt_users(id),
  FOREIGN KEY (assessor_id) REFERENCES kt_users(id),
  INDEX (user_id, status, completed_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Snapshot the wording when an assessment starts; later edits preserve history.
CREATE TABLE IF NOT EXISTS kt_answers (
  assessment_id INT UNSIGNED NOT NULL,
  question_id INT UNSIGNED NOT NULL,
  category VARCHAR(160) NOT NULL,
  title VARCHAR(190) NOT NULL,
  subskills VARCHAR(255) NOT NULL,
  level_1 TEXT NOT NULL,
  level_2 TEXT NOT NULL,
  level_3 TEXT NOT NULL,
  rating DECIMAL(2,1) NULL,
  answered_at DATETIME NULL,
  PRIMARY KEY (assessment_id, question_id),
  FOREIGN KEY (assessment_id) REFERENCES kt_assessments(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES kt_questions(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt_rate_limits (
  bucket CHAR(64) PRIMARY KEY,
  hits INT UNSIGNED NOT NULL DEFAULT 1,
  expires_at DATETIME NOT NULL,
  INDEX (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

