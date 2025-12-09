from fastapi import FastAPI

app = FastAPI(title="To-do List Schedule", version="0.1")

@app.get("/")
async def root():
  return {"message": "Hello World"}