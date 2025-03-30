from django.db import models

class Guest(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    national_id = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    country_flag = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name