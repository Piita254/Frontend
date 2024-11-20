import os
from app import create_app, db
from flask_cors import CORS




# Create the application instance
app = create_app()
CORS(app, resources={r"/*": {"origins": "*"}})
# Run the application
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5555)) 
    app.run(host="0.0.0.0", port=port, debug=True)
