from django.db import models

class Attendance(models.Model):
    day = models.CharField(max_length=20)
    date = models.CharField(max_length=20)
    status = models.CharField(max_length=20)
    t1_in = models.CharField(max_length=10, blank=True)
    t1_out = models.CharField(max_length=10, blank=True)
    t2_in = models.CharField(max_length=10, blank=True)
    t2_out = models.CharField(max_length=10, blank=True)
    t3_in = models.CharField(max_length=10, blank=True)
    t3_out = models.CharField(max_length=10, blank=True)
    official_duty = models.CharField(max_length=10)
    presence = models.CharField(max_length=10)
    work = models.CharField(max_length=10)
    delay = models.CharField(max_length=10)
    early = models.CharField(max_length=10)
    underwork = models.CharField(max_length=10)
    between_underwork = models.CharField(max_length=10)
    early_overtime = models.CharField(max_length=10)
    overtime = models.CharField(max_length=10)
    illegal_overtime = models.CharField(max_length=10)
    fixed_overtime = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.date} - {self.day}"
