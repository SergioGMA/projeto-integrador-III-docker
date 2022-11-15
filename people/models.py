from django.db import models
from datetime import datetime
from uuid import uuid4

def upload_image_people(instance, filename):
    return f"{instance.id_people}-{filename}"

class People(models.Model):
    id_people = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome_cadastrador = models.CharField(verbose_name='Nome do Cadastrador', max_length=100, default="Nome do Cadastrador")
    email = models.CharField(verbose_name='email', max_length=40, default="email")
    telefone = models.CharField(verbose_name='Telefone', max_length=12, default="Telefone")
    cidade = models.CharField(verbose_name='Cidade', max_length=30, default="Cidade")
    nome_desaparecido = models.CharField(verbose_name='Nome do Desaparecido', max_length=100, default="Nome do Desaparecido")
    sexo = models.CharField(verbose_name='Sexo', max_length=30, default="Sexo")
    data_nascimento = models.DateField(verbose_name='Data Nascimento', default=datetime.now)
    visto_ultima_vez = models.CharField(verbose_name='Visto Pela Ultima Vez', max_length=255, default="Visto Pela Ultima Vez")
    caracteristica_fisica = models.CharField(verbose_name='Caracteristica Fisica', max_length=255, default="Caracteristica Fisica")
    image = models.ImageField(upload_to=upload_image_people, blank=True, null=True)