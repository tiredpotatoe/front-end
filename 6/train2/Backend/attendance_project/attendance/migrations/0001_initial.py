# Generated by Django 5.2 on 2025-04-17 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(max_length=20)),
                ('date', models.CharField(max_length=20)),
                ('status', models.CharField(max_length=20)),
                ('t1_in', models.CharField(blank=True, max_length=10)),
                ('t1_out', models.CharField(blank=True, max_length=10)),
                ('t2_in', models.CharField(blank=True, max_length=10)),
                ('t2_out', models.CharField(blank=True, max_length=10)),
                ('t3_in', models.CharField(blank=True, max_length=10)),
                ('t3_out', models.CharField(blank=True, max_length=10)),
                ('official_duty', models.CharField(max_length=10)),
                ('presence', models.CharField(max_length=10)),
                ('work', models.CharField(max_length=10)),
                ('delay', models.CharField(max_length=10)),
                ('early', models.CharField(max_length=10)),
                ('underwork', models.CharField(max_length=10)),
                ('between_underwork', models.CharField(max_length=10)),
                ('early_overtime', models.CharField(max_length=10)),
                ('overtime', models.CharField(max_length=10)),
                ('illegal_overtime', models.CharField(max_length=10)),
                ('fixed_overtime', models.CharField(max_length=10)),
            ],
        ),
    ]
