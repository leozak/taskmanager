import requests

headers = {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsZW96YWtAZ21haWwuY29tIiwiZXhwIjoxNzY5MTg4NDAyfQ.5uN7QYFKVfoFJicGbDGZHH59gFE0vZse-wuxYH3v6X4"
}

request = requests.get("http://localhost:8000/users/refresh-token", headers=headers)

print(request)

print(request.json())