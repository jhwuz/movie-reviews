from django.db import models


# Create your models here.
class MovieReview(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(max_length=50)
    rating = models.DecimalField(decimal_places=2, max_digits=4)
    description = models.TextField()
    # user = models.ForeignKey(User)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
