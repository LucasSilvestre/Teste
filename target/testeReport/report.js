$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastroCartao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gloureirog@indracompany.com"
    },
    {
      "line": 2,
      "value": "# encoding: iso-8859-1"
    }
  ],
  "line": 6,
  "name": "Registro de Tarjeta - Website Banco Ripley",
  "description": "\r\nYo como Analista de pruebas\r\nQuiero registrar una tarjeta",
  "id": "registro-de-tarjeta---website-banco-ripley",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de préstamo",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Acceda la página Consolidacion",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Acceda la pagina Credito",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Acceda la pagina Reprogramacion",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "CT01 - Acceda la pagina Prestamo",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "CT01 - Acceda la pagina Pago",
  "keyword": "When "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;",
  "rows": [
    {
      "cells": [
        "dni",
        "correo"
      ],
      "line": 25,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;1"
    },
    {
      "cells": [
        "\"123456\"",
        "\"indra@teste.com\""
      ],
      "line": 26,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    },
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de préstamo",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Acceda la página Consolidacion",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Acceda la pagina Credito",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Acceda la pagina Reprogramacion",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "CT01 - Acceda la pagina Prestamo",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "CT01 - Acceda la pagina Pago",
  "keyword": "When "
});
formatter.match({
  "location": "CadastroCartaoTest.acessarPaginaCadastro()"
});
formatter.result({
  "duration": 7832741224,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.clicarTarjeta()"
});
formatter.result({
  "duration": 4469456937,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.inserirDni()"
});
formatter.result({
  "duration": 3805397968,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.inserirCorreo()"
});
formatter.result({
  "duration": 3265610598,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.acessarTelaTipoAutorizacao()"
});
formatter.result({
  "duration": 3089394100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.acessarPaginaPrestamo()"
});
formatter.result({
  "duration": 3296072671,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.acessarPago()"
});
formatter.result({
  "duration": 3446318797,
  "status": "passed"
});
});