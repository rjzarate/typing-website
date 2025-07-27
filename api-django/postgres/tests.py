from django.test import Client, TestCase
from postgres.models import Foo

# Create your tests here.
# class ViewTests(TestCase):
#     pass

class ModelTests(TestCase):
    def test_model_foo(self):
        foo = Foo(
            name="Test"
        )

        self.assertTrue(isinstance(foo, Foo))
        
class ViewTests(TestCase):
    def setUp(self):
        self.client = Client()
        # Create some Foo objects
        Foo.objects.create(name="Foo 1")
        Foo.objects.create(name="Foo 2")

    def test_get_all_foos(self):
        # Get url response
        response = self.client.get("/postgres/test/")

        # Response is valid
        self.assertEqual(response.status_code, 200)

        # Get json
        data = response.json()

        self.assertEqual(len(data), 2)

        self.assertTrue(any(foo["name"] == "Foo 1" for foo in data))
        self.assertFalse(any(foo["name"] == "Foo 3" for foo in data))