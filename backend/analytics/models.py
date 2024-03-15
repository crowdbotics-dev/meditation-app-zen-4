from django.conf import settings
from django.db import models


class UserActivity(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="useractivity_user",
    )
    activity_date = models.DateField(
        null=False,
        blank=False,
    )
    activity_type = models.CharField(
        max_length=255,
    )


# Create your models here.
