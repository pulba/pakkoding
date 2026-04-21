import { createRemoteJWKSet, jwtVerify } from 'jose';

// Firebase projectId (harus sama dengan PUBLIC_FIREBASE_PROJECT_ID di .env)
const projectId = 'pak-koding-web';

// URL JWKS untuk Firebase Auth Google
const JWKS_URL = new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com');
const JWKS = createRemoteJWKSet(JWKS_URL);

/**
 * Memverifikasi Firebase ID Token JWT di Edge (Cloudflare Pages)
 * menggunakan library `jose` (tanpa ketergantungan native Node.js).
 */
export async function verifyFirebaseToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: `https://securetoken.google.com/${projectId}`,
      audience: projectId,
    });
    
    return payload; // Mengandung uid, email, name, picture, dll.
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
