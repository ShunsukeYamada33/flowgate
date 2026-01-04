CREATE EXTENSION IF NOT EXISTS pgcrypto; 

DROP TABLE approval_histories; 

DROP TABLE applications; 

DROP TABLE users; 

CREATE TABLE users( 
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
    , email VARCHAR UNIQUE NOT NULL
    , password_hash VARCHAR NOT NULL
    , role VARCHAR NOT NULL
); 

CREATE TABLE applications( 
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
    , applicant_id UUID NOT NULL
    , status VARCHAR NOT NULL
    , title VARCHAR NOT NULL
    , content TEXT NOT NULL
    , FOREIGN KEY (applicant_id) REFERENCES users(id) 
        ON 
    DELETE RESTRICT
); 

CREATE TABLE approval_histories( 
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
    , application_id UUID NOT NULL
    , action VARCHAR NOT NULL
    , actor_id UUID NOT NULL
    , comment TEXT
    , acted_at DATETIME NOT NULL DEFAULT now()
    , FOREIGN KEY (application_id) REFERENCES applications(id) 
        ON 
    DELETE CASCADE
    , FOREIGN KEY (actor_id) REFERENCES users(id) 
        ON 
    DELETE RESTRICT
); 
