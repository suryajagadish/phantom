# phantom

END POINTS
===========

GET /file/read

POST /file/write
    body { data }

POST /auth/signin
    body { username, password }

GET /auth/signedin

POST /upload
    multi-part form with name as 'image' for jpeg files

GET /images/<image_name>
    get access to files in static folder

POST /razorpay/create