import pytest
from django.test import Client
from apps.postgres.models import Foo

@pytest.mark.django_db
def test_model_foo():
    foo = Foo(name="Test")
    assert isinstance(foo, Foo)

@pytest.fixture
def client():
    return Client()

@pytest.mark.django_db
def test_model_instance():
    foo = Foo.objects.create(name="Foo 0")
    assert Foo.objects.count() == 1

@pytest.fixture
def create_foos():
    Foo.objects.create(name="Foo 1")
    Foo.objects.create(name="Foo 2")

@pytest.mark.django_db
def test_get_all_foos(client, create_foos):
    # Tests test_request & /postgres/test/
    response = client.get("/postgres/test/")
    assert response.status_code == 200

    data = response.json()
    assert len(data) == 2
    assert any(foo["name"] == "Foo 1" for foo in data)
    assert not any(foo["name"] == "Foo 3" for foo in data)