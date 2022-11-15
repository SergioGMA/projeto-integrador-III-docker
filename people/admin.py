from django.contrib import admin
from .models import People


@admin.register(People)
class PeopleAdmin(admin.ModelAdmin):
    list_display = ('id_people', 'nome_cadastrador', 'email', 'telefone', 'cidade', 'nome_desaparecido', 'sexo', 'data_nascimento', 'visto_ultima_vez', 'caracteristica_fisica', 'image',)
    list_display_links = ('id_people', 'nome_cadastrador', 'email', 'telefone', 'cidade', 'nome_desaparecido', 'sexo', 'data_nascimento', 'visto_ultima_vez', 'caracteristica_fisica', 'image',)
