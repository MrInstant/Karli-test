SET NAMES utf8mb4;

INSERT INTO kt_clubs (name, invite_code)
SELECT 'Tallinna väitlusselts', 'TALLINN2026'
WHERE NOT EXISTS (SELECT 1 FROM kt_clubs WHERE invite_code = 'TALLINN2026');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q1', 'Kuulamine ja märkmete tegemine', 'Struktuurne kuulamine', 'Olulise äratundmine · korratusest korra loomine',
  'Kuulab kõne ja saab selges kõnes peamistest argumentidest ja ümberlüketest aru. Suudab keskenduda algusest lõpuni.',
  'Kuulab kõne ja saab enamikes kõnedes raamist, peamistest argumentidest ja ümberlüketest aru.',
  'Kuulab kõne ja saab ka segases kõnes raamist ja argumentidest täies mahus aru, sealhulgas seletustest, näidetest ja mõjudest.', 1
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q1');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q2', 'Kuulamine ja märkmete tegemine', 'Märkmete tegemine', 'Väitluslehe ülesehitus · lühendamine ja visualiseerimine',
  'Saab paberile üksikud mõtted kirja.',
  'Saab paberile peamised argumendiliinid kirja. Paneb sisu kirja nii, et seda on mugav kõnes lugeda.',
  'Saab paberile peamised argumendiliinid kirja nii, et nende põhjal saab väitluse sisu taasesitada. Koostab märkmeid tehes kõnelemiskava.', 2
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q2');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q3', 'Argumenteeriv esitus', 'Argumenteerimine', 'Argumendi struktuur · mõju- ja tõenäosusanalüüs',
  'Koostab ja esitab lihtsamaid väide-seletus-näide-järeldus argumente.',
  'Toob välja, mis on argumendi mõju. Moodustab mitmetasandilisi argumente koos tõestusega.',
  'Tunneb ja esitab tüüpargumente koos tõestusega. Toob välja, mis on argumendi mõju ja tugevdab oma argumente.', 3
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q3');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q4', 'Argumenteeriv esitus', 'Ümberlükkamine', 'Ümberlükkete tegemine · kaalumine',
  'Koostab lihtsamaid ümberlükkeid.',
  'Leiab enamikele argumentidele ümberlükke. Kaalub enamikes väitlustes, toetudes raamile.',
  'Tunneb ja kasutab argumendile vastavaid ümberlükkemeetodeid. Kaalub kõikides väitlustes, toetudes raamile.', 4
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q4');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q5', 'Argumenteeriv esitus', 'Vahemärkused', 'Vahemärkuste esitamine · vahemärkuste kasutamine',
  'Julgeb esitada ja vastu võtta vahemärkusi.',
  'Esitab sisulisi vahemärkusi ja vastab vahemärkustele sisuliselt.',
  'Kasutab vahemärkuste esitamist ja vastamist strateegiliselt.', 5
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q5');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q6', 'Argumenteeriv esitus', 'Formaadi tundmine', 'Kõne rollide teadmine · ajaplaanimine',
  'Teab formaadi reegleid ja kõnelejate rolle, kuid sageli unustab midagi neist praktikas.',
  'Formaat ja rolliootused on selged, kuid aja kasutamise tõhusamaks muutmise peale veel väga ei mõtle.',
  'Järgib mängleva kergusega formaadi reegleid ja rolliootuseid ning on väitluse jooksul hea ajaplaanija.', 6
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q6');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q7', 'Argumenteeriv esitus', 'Kaasuse koostamine', 'Raami koostamine · tõestusmaterjali otsimine',
  'Otsib edukalt tõestusmaterjali. Koostab lihtsamate teemade puhul ausaid raame.',
  'Otsib edukalt tõestusmaterjali ja hindab kriitiliselt allikat. Koostab enamike teemade puhul ausaid raame.',
  'Otsib, analüüsib ja viitab edukalt tõestusmaterjalile. Koostab kõikide teemade puhul ausaid raame ning mõistab oma tõestuskoormist.', 7
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q7');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q8', 'Avalik esinemine', 'Stiil ja sõnakasutus', 'Ärevuse kontrollimine · publiku kaasamine',
  'Julgeb võtta sõna, kuid ärevust on näha. Publikul või kohtunikul on kohati raske mõtet jälgida.',
  'Viisakas ja selge sõnakasutus. Mõte on jälgitav, kuid publiku või kohtunikuga eriti ei arvesta.',
  'Enesekindel ja kaasahaarav esineja. Mitmekesine sõnakasutus. Kõneleb publikule või kohtunikule ja käivitab neid.', 8
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q8');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q9', 'Avalik esinemine', 'Kõnetehnika', 'Diktsioon ehk hääldus · parakeel',
  'Räägib kuuldavalt, aga ei pööra kõnetehnikale veel tähelepanu.',
  'Juhib kohati oma parakeelt ja diktsioon on selge.',
  'Parakeel toetab kõiges sisulist sõnumit.', 9
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q9');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q10', 'Tagasisidestamine', 'Refleksioon', 'Enesearengu juhtimine',
  'Tunneb oma arengukohti.',
  'Tunneb oma arengukohti ja seostab neid tervikuga.',
  'Mõtestab endale juhiseid, kuidas ja kuhu suunas edasi areneda.', 10
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q10');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q11', 'Tagasisidestamine', 'Kohtunikutöö', 'Võitluse kohta otsuse tegemine · tagasiside andmine',
  'Koostab väitlust kuulates tervikliku märkmelehe ja määrab väitluse võitja.',
  'Koostab väitlust kuulates tervikliku märkmelehe ja määrab väitluse võitja. Põhjendab oma otsust.',
  'Koostab väitlust kuulates tervikliku märkmelehe, määrab väitluse võitja ja annab nii kogu väitlejale kui ka igale väitlejale individuaalset tagasisidet.', 11
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q11');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q12', 'Toetavad oskused', 'Meeskonnatöö', 'Rollide jagamine · tiimikaaslaste toetamine',
  'Töötab edukalt koos tuttavate väitluskaaslastega.',
  'Töötab edukalt kõikide väitluskaaslastega.',
  'Töötab edukalt kõikide väitluskaaslastega ja toetab kaaslasi ettevalmistusel.', 12
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q12');

INSERT INTO kt_questions (club_id, source_key, category, title, subskills, level_1, level_2, level_3, sort_order)
SELECT c.id, 'q13', 'Toetavad oskused', 'Silmaring', 'Meedia tarbimine · huvi maailmas toimuva vastu',
  'On kuulnud suurimatest vaidlusküsimustest ühiskonnas.',
  'Jälgib ajakirjandusmeediat ning on kursis peamiselt päevakajaliste teemadega Eestis ja sotsiaalmeedias.',
  'Jälgib nii Eesti kui ka välismeediat ja loeb peamisi ilmuvaid raporteid.', 13
FROM kt_clubs c WHERE c.invite_code='TALLINN2026' AND NOT EXISTS (SELECT 1 FROM kt_questions q WHERE q.club_id=c.id AND q.source_key='q13');
