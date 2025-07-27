from django.db import models

# Create your models here.
class Foo(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'foo'  # maps to the existing table created via SQL