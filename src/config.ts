import * as cfg from './configVariables';

export const firebaseConfig = {
	fire: {
                apiKey: cfg.firebase_apiKey,
                authDomain: cfg.firebase_authDomain,
                databaseURL: cfg.firebase_databaseURL,
                projectId: cfg.firebase_projectId,
                storageBucket: cfg.firebase_storageBucket,
                messagingSenderId: cfg.firebase_messagingSenderId,
	}
}; 