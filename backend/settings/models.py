from django.db import models

class Settings(models.Model):
    min_booking_length = models.IntegerField(default=3)
    max_booking_length = models.IntegerField(default=30)
    max_guests_per_booking = models.IntegerField(default=10)
    breakfast_price = models.DecimalField(max_digits=10, decimal_places=2, default=15)

    class Meta:
        verbose_name_plural = "Settings"

    def __str__(self):
        return "Application Settings"