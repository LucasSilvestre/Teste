package br.indra.gloureirog.tests;

import static br.indra.gloureirog.core.DriverFactory.getDriver;

import br.indra.gloureirog.core.BasePage;
import br.indra.gloureirog.core.BaseTest;
import br.indra.gloureirog.core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CadastroCartaoTest {

	BasePage page = new BasePage();
	
	/*---- CT01 ----*/

	@Given("^CT01 - Acceder la Página principal$")
	public void acessarPaginaCadastro() throws Throwable {
		getDriver().get("http://www.bancoripley.com.pe/bancoripley/home/index.html");
	}

	@When("^CT01 - Acceda la página de préstamo$")
	public void clicarTarjeta() throws Throwable {
		page.realizarBusca("m_creditos", "MMMenu0805194703_0_Item_0");
		BaseTest.finaliza();
	}

	@When("^CT01 - Acceda la página Consolidacion$")
	public void inserirDni() throws Throwable {
		page.realizarBusca("m_creditos","MMMenu0805194703_0_Item_1");
		BaseTest.finaliza();
	}

	@When("^CT01 - Acceda la pagina Credito$")
	public void inserirCorreo() throws Throwable {
		page.realizarBusca("m_creditos","MMMenu0805194703_0_Item_2");
		BaseTest.finaliza();
	}

	@When("^CT01 - Acceda la pagina Reprogramacion$")
	public void acessarTelaTipoAutorizacao() throws Throwable {
		page.realizarBusca("m_creditos", "MMMenu0805194703_0_Item_3");
		BaseTest.finaliza();
	}
	@When("^CT01 - Acceda la pagina Prestamo$")
	public void acessarPaginaPrestamo() throws Throwable {
		page.realizarBusca("m_creditos", "MMMenu0805194703_0_Item_4");
		BaseTest.finaliza();
	}
	@When("^CT01 - Acceda la pagina Pago$")
	public void acessarPago() throws Throwable {
		page.realizarBusca("m_creditos", "MMMenu0805194703_0_Item_5");
		BaseTest.finaliza();
		DriverFactory.killDriver();
	}

	

	/*---- CT001 ----*/
	

}
