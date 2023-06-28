from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title


class Project(models.Model):
    projectName = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projectImages/')  # Image resource field
    date = models.DateField()  # Date field

    def __str__(self):
        return self.projectName
