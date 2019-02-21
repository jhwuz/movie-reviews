from django.db import models


# Create your models here.
class MovieReview(models.Model):
    movieID = models.AutoField()
    title = models.TextField()
    rating = models.IntegerField()
    description = models.TextField()
    user = models.ForeignKey(User)


class User(models.Model):
    userID = models.AutoField()
    username = models.CharField(max_length=50)
