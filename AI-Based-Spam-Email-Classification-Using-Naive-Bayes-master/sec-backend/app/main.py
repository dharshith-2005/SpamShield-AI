from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import os

app = FastAPI(
    title="SpamShield AI API",
    version="1.0"
)

# -------------------- CORS --------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- Load Model --------------------

BASE_DIR = os.path.dirname(__file__)

model = joblib.load(
    os.path.join(BASE_DIR, "saved_model", "spam_classifier_model.pkl")
)

vectorizer = joblib.load(
    os.path.join(BASE_DIR, "saved_model", "vectorizer.pkl")
)

# -------------------- Request --------------------

class EmailRequest(BaseModel):
    email_subject: str

# -------------------- Home --------------------

@app.get("/")
def home():
    return {
        "message": "SpamShield AI Backend Running"
    }

# -------------------- Prediction --------------------

@app.post("/predict/")
def predict_email_spam(request: EmailRequest):

    try:

        email = request.email_subject

        print("Received:", email)

        vector = vectorizer.transform([email])

        prediction = model.predict(vector)

        result = str(prediction[0]).lower()

        print("Prediction:", result)

        return {
            "success": True,
            "prediction": result
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }