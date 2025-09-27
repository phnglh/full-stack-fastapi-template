my_fastapi_project/
├── app/
│ ├── **init**.py
│ ├── main.py
│ ├── api/
│ │ ├── v1/
│ │ │ ├── routers/
│ │ │ │ ├── users.py
│ │ │ │ ├── items.py
│ │ │ └── schemas/
│ │ │   ├── user.py
│ │ │   ├── item.py
│ │ └── dependencies.py
│ ├── core/
│ │ ├── config.py # load settings / env
│ │ ├── logging.py
│ ├── db/
│ │ ├── base.py
│ │ ├── session.py
│ ├── services/
│ │ ├── user_service.py
│ │ └── item_service.py
│ ├── models/
│ └── utils/
├── tests/
│ ├── api/
│ ├── services/
│ └── conftest.py
├── Dockerfile
├── docker-compose.yml # nếu có sử dụng nhiều service (DB, cache,…)
├── .env
├── pyproject.toml / poetry.lock # nếu dùng Poetry
├── requirements.txt # nếu dùng pip
├── .gitignore
└── README.md
