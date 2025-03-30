from django.db import models

class Cabin(models.Model):
    name = models.CharField(max_length=100)
    max_capacity = models.IntegerField()
    regular_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name