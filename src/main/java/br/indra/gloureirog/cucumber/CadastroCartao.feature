#Author: gloureirog@indracompany.com
# encoding: iso-8859-1

@ProjetoBancoRipley

Feature: Registro de Tarjeta - Website Banco Ripley

Yo como Analista de pruebas
Quiero registrar una tarjeta
 

@CT001

Scenario Outline:  Registro de tarjeta

Given CT01 - Acceder la P�gina principal
When CT01 - Acceda la p�gina de pr�stamo
When CT01 - Acceda la p�gina Consolidacion
When CT01 - Acceda la pagina Credito
When CT01 - Acceda la pagina Reprogramacion
When CT01 - Acceda la pagina Prestamo
When CT01 - Acceda la pagina Pago

Examples:
|dni		   |correo           |
|"123456"  |"indra@teste.com"|

