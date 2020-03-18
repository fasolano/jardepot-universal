import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../../../shared/dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public lat: number = 18.943268;
    public lng: number = -99.242426;
    public zoom: number = 17;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    subscribe() {
    }

    public openAvisoPrivacidadDialog() {
        const textBody = 'Los datos personales (Los Datos) solicitados, son tratados por Jardepot S.A. de C.V. (Jardepot),' +
            ' con la finalidad de brindarle el servicio que nos solicita, conocer sus necesidades de productos o servicios y ' +
            'estar en posibilidad de ofrecerle los que más se adecuen a sus preferencias; comunicarle promociones, atender quejas y ' +
            'aclaraciones, y en su caso, tratarlos para fines compatibles con los mencionados en este Aviso de Privacidad y que se consideren ' +
            'análogos para efectos legales. En caso de formalizar con Usted la aceptación de algún producto o servicio ofrecido por Jardepot, ' +
            'sus Datos serán utilizados para el cumplimiento de las obligaciones derivadas de esa relación jurídica.      ' +
            'Los Datos serán tratados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.' +
            '      La confidencialidad de los Datos está garantizada y los mismos están protegidos por medidas de seguridad administrativas, técnicas y físicas,' +
            ' para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Únicamente las personas autorizadas tendrán acceso a sus Datos.     ' +
            ' En caso de existir alguna modificación al presente Aviso de Privacidad se hará de su conocimiento en nuestro sitio de Internet';
        const dialogRef = this.dialog.open(DialogComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Aviso de privacidad';
        dialogRef.componentInstance.body = textBody;
    }

    public openAvisoLegalDialog() {
        const textBody = ' TÉRMINOS Y CONDICIONES DE USO\n' +
            '      <br>\n' +
            '      <br>\n' +
            '      1. Objeto.\n' +
            '      <br>\n' +
            '      Los presentes Términos y Condiciones de Uso (los “<u>TCU</u>”) regulan el uso del sitio web www.jardepot.com, de cuyo uso en México es titular Jardepot S.A. de C.V. (“Jardepot”), así como las condiciones de compra y venta de los productos ofrecidos en el mismo y las Políticas de Privacidad.\n' +
            '      <u>Jardepot S.A. de C.V.</u> es una persona moral constituida de conformidad con las leyes de los Estados Unidos Mexicanos.\n' +
            '      A través de su Sitio Web Jardepot proporciona información acerca de los productos y servicios que presta, ofreciendo la posibilidad de contratarlos a aquellas personas que, previo cumplimiento de los requisitos establecidos por Jardepot (i.e. ser mayor de edad, completar el formulario de registro y seguir los pasos señalados posteriormente vía e-mail), adquieren la calidad de Usuarios (los “<u>Usuarios</u>”). La condición de (“Usuario”) supone la adhesión a las TCU en la versión publicada en el momento en que se acceda al Sitio Web.\n' +
            '      En cualquier caso, aquellas personas físicas que accedan al Sitio Web y que no lleguen a registrarse (los “<u>Usuarios</u>”) aceptan quedar sometidos a los TCU en la medida en que les sean aplicables.\n' +
            '      Los productos y servicios ofrecidos por Jardepot se dirigen única y exclusivamente a personas con plena capacidad y legitimación para obligarse de conformidad con los TCU, asimismo Jardepot solamente acepta y distribuye pedidos en el territorio de México (el “<u>Territorio</u>”).\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      2. Información sobre los productos.\n' +
            '      <br>\n' +
            '      Las descripciones de los productos expuestos en el Sitio Web se realizan en base a la información proporcionada por los proveedores de Jardepot, en consecuencia, la información proporcionada en el Sitio Web acerca de cada producto, incluyendo las fotografías y/o vídeos, así como los nombres comerciales, marcas o signos distintivos son expuestos para orientar a los Usuarios.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      3. Disponibilidad.\n' +
            '      <br>\n' +
            '      El número de unidades disponibles al iniciarse las campañas han sido reservadas por nuestros proveedores para su venta en el Sitio Web. En ningún caso Jardepot pondrá a la venta intencionalmente más unidades de las que el proveedor le haya reservado.\n' +
            '      En ocasiones, debido a causas ajenas a o difícilmente controlables por <u>Jardepot</u>, tales como errores humanos o fallas en los sistemas informáticos, es posible que la cantidad finalmente servida por el proveedor difiera del pedido realizado por Jardepot para satisfacer los pedidos de los Usuarios.\n' +
            '      En caso de que el producto no esté disponible después de haberse formalizado mediante pago el pedido, el Usuario será informado por email de la anulación total o parcial de éste. En caso de anulación total <u>Jardepot</u> reembolsará al Usuario el pago realizado en el mismo medio en que fue realizado. La anulación parcial del pedido debido a falta de disponibilidad no da derecho a la anulación de la totalidad del pedido. Si a raíz de esta anulación el cliente quiere devolver el producto entregado deberá seguir lo estipulado en el apartado 10 de las TCU.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      4. Pago.\n' +
            '      <br>\n' +
            '      El Usuario se compromete a pagar en el momento que realiza el pedido. Al precio inicial sujeto a cambio sin previo aviso y a existencias del producto al momento de compra, que figure en el Sitio Web mediante depósito o transferencia bancaria o a través de tarjeta de crédito o de débito (Visa, Mastercard, Visa Electrón, American Express y/u otras tarjetas análogas), mediante el sistema de PayPal.\n' +
            '      El Usuario deberá notificar a Jardepot cualquier cargo indebido o fraudulento en la tarjeta utilizada para las compras, por e-mail o vía telefónica, en el menor plazo de tiempo posible para que Jardepot pueda realizar las gestiones oportunas.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      5. Seguridad.\n' +
            '      <br>\n' +
            '      <u>Jardepot</u> para el proceso de pagos cuenta con las máximas medidas de seguridad comercialmente disponibles en el sistema PAYPAL con lo que se garantiza:\n' +
            '      (i)Que el Usuario está comunicando sus datos al centro servidor de PAYPAL y no a cualquier otro que intentara hacerse pasar por éste.\n' +
            '      (ii);Que entre el Usuario y el centro servidor de PAYPAL los datos se transmiten cifrados, evitando su posible lectura o manipulación por terceros.\n' +
            '      Asimismo, <u>Jardepot</u> no tiene acceso a datos confidenciales relativos al medio de pago utilizado, y por tanto tampoco los almacena.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      6. Formalización de pedidos.\n' +
            '      <br>\n' +
            '      Una vez formalizado el pedido, Jardepot enviará un e-mail al Usuario confirmando los detalles de la compra realizada, adicionalmente se le estará enviando otro e-mail con el estado del pago del pedido. Una vez confirmado el pago del pedido el usuario recibirá un e-mail con la confirmación del mismo y además los e-mails correspondientes a los distintos estados de envío del pedido.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      7. Cancelación de pedidos.\n' +
            '      <br>\n' +
            '      Jardepot aceptará la cancelación de los pedidos por parte del cliente con una penalización de 20% sobre el monto total del pedido, siempre y cuando ésta se solicite antes del envío del producto. Una vez enviado, no se aceptarán cancelaciones de pedidos por parte del cliente por ningún motivo. Todo pedido está Sujeto a Existencias al momento de compra; en caso de no contar con el producto, Jardepot devolverá en un plazo no mayor a 72 Hrs el importe depositado por el cliente sin ningún compromiso adicional.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8. Plazos, Lugar de Entrega y Extravíos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.1 Entrega del producto.\n' +
            '      <br>\n' +
            '      Jardepot se compromete a entregar el producto en perfecto estado en la dirección que el Usuario señale en el formulario de pedido, y que en todo caso deberá estar comprendida dentro de la cobertura ODM Express del Territorio Mexicano. Con el fin de optimizar la entrega, agradecemos al Usuario que indique una dirección en la cual el pedido pueda ser entregado dentro de las horas de trabajo.\n' +
            '      Jardepot no será responsable por los errores causados en la entrega cuando la dirección de entrega señalada por el Usuario en el formulario de pedido no se ajuste a la realidad o hayan sido omitidos datos necesarios para su ubicación.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.2 Plazo de Entrega.\n' +
            '      <br>\n' +
            '      El plazo máximo fijado para las entregas es de treinta (15) días hábiles, contados desde la comprobación del pago, aunque el plazo de entrega habitual de Jardepot suele oscilar entre los 3 y 7 días hábiles, contados desde la fecha de verificación de pago.\n' +
            '      Estos plazos son promedios, y por tanto una estimación, con lo cual es posible que varíen por cuestiones de logística o causas de fuerza mayor. En caso de retraso en la entrega, Jardepot informará al Usuario en cuanto tenga conocimiento del mismo.\n' +
            '      Para mayor información, es importante tener en cuenta que el procedimiento durante este tiempo es el siguiente: recibir la mercancía de nuestros proveedores en nuestros almacenes, preparación de los pedidos y envío a través de ODM Express. El día que se envía el pedido por ODM Express, Jardepot lo comunicará al Usuario mediante e-mail confirmando la salida de nuestros almacenes e indicando el número de guía de rastreo correspondiente. Cada entrega se considera realizada desde el momento en que ODM Express pone el producto a disposición del Usuario, lo cual se materializa a través del sistema de control utilizado por dicha compañía de transportes.\n' +
            '      En el caso de retraso en la entrega de los pedidos por causas imputables a <u>Jardepot</u>, el Usuario podrá anular su pedido de acuerdo con el procedimiento descrito en el Apartado 11 de los TCU. No se considerarán retrasos en la entrega aquellos casos en los que el pedido haya sido puesto a disposición del Usuario por parte de la compañía de transporte dentro del plazo antes señalado y no haya podido ser entregado por causas imputables al Usuario.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.3 Datos de entrega, entregas no realizadas y extravío.\n' +
            '      <br>\n' +
            '      En el mismo e-mail en el que se informa al Usuario que el producto ha salido de los almacenes de Jardepot, se proporciona el número de guía y el número de atención al cliente de la compañía de transportes responsable de la entrega, para que, en caso que surja cualquier problema con la entrega, el Usuario pueda contactar directamente a ODM Express para resolverla.\n' +
            '      Si en el momento de la entrega el Usuario se encuentra ausente, se dejará un aviso en el que figura la hora de la visita con un número de teléfono para que pueda contactarlos y coordinar una nueva entrega.\n' +
            '      Si el Usuario no se comunica después de un largo período de tiempo su paquete será devuelto al depósito de <strong>Jardepot</strong> y nosotros le contactaremos para volver a coordinar la entrega. El costo de esta nueva entrega correrá por su cuenta.\n' +
            '      Si el motivo por el que no se ha podido realizar la entrega es el extravío del paquete, nuestro transportista iniciará una investigación. En estos casos, los plazos de respuesta de nuestros transportistas suelen oscilar entre una y tres semanas.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.4 Diligencia en la entrega.\n' +
            '      <br>\n' +
            '      El Usuario deberá comprobar el buen estado del paquete ante el transportista que, por cuenta de Jardepot, realice la entrega del producto solicitado, indicando en la hoja de entrega cualquier anomalía que pudiera detectar en el embalaje. Si posteriormente, una vez revisado el producto, el Usuario detectase cualquier incidencia en el mismo, incluyendo algún golpe, rotura, indicios de haber sido abierto o cualquier desperfecto causado en el mismo por el envío, el Usuario deberá comunicarlo a Jardepot vía e-mail dentro de los 7 días hábiles siguientes a la entrega.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      9. Devoluciónes y reenbolsos.\n' +
            '      <br>\n' +
            '      Jardepot no acepta devoluciones, verifique y aclare todas sus dudas con el departamento de ventas antes de realizar su compra.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      9.2 Reembolsos al Usuario.\n' +
            '      <br>\n' +
            '      Si por algún error de inventario se recibiese un pago por un producto no disponible para cumplir con el plazo de entrega prometido, Jardepot comunicará al Usuario la próxima disponibilidad del producto para acordar una fecha posterior de envío o en su caso realizará un reembolso igual al pago realizado.\n' +
            '      La aplicación de la devolución en la cuenta o tarjeta del Usuario dependerá de la tarjeta y de la entidad financiera emisora. El plazo de aplicación será de hasta 30 días para las tarjetas de crédito.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      10. Garantía de los productos adquiridos.\n' +
            '      <br>\n' +
            '      Jardepot actúa en calidad de distribuidor de fabricantes o distribuidores mayoristas que garantizan que los productos que se presentan a la venta en el Sitio Web funcionan correctamente y no presentan defectos, ni vicios ocultos que puedan hacerlos peligrosos o inadecuados para su uso normal.\n' +
            '      La garantía contractual ofrecida es la que habitualmente concede el proveedor y la misma será claramente detallada en la ficha descriptiva de los productos.\n' +
            '      Una vez que el Usuario haya recibido el producto tendrá un folleto informativo que provee el fabricante con las instrucciones suficientes para el correcto uso e instalación del producto y toda la información acerca de la garantía. Ningún Usuario podrá reclamar una garantía más amplia de la que ahí se indica.\n' +
            '      Jardepot no estará obligado a recoger el producto averiado y el Usuario deberá dirigirse al Servicio Posventa del Proveedor. En este sentido, Jardepot realizará las acciones encaminadas a proporcionar a los Usuarios que así lo soliciten los datos de contacto de dicho servicio y facilitará a estos información suficiente para la presentación de las reclamaciones pertinentes.\n' +
            '      La garantía perderá su vigencia en caso de defectos o deterioros causados por factores externos, accidentes, en especial, accidentes eléctricos, desgaste, instalación y utilización no conforme a las instrucciones del Proveedor.\n' +
            '      Quedan excluidos de la garantía los productos modificados o reparados por el Usuario o cualquier otra persona no autorizada por el proveedor. La garantía no será aplicable a los vicios aparentes y los defectos de conformidad del producto, para los que cualquier reclamación deberá ser formulada por el Usuario en cuestión en los 7 días siguientes a la entrega de los productos. La garantía no cubrirá los productos dañados por un uso inadecuado.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      11. Propiedad intelectual e industrial.\n' +
            '      <br>\n' +
            '      Jardepot ostenta todos los derechos sobre el contenido, diseño y código fuente del Sitio Web y, en especial, de manera enunciativa más no limitativa, sobre las fotografías, imágenes, textos, diseños, y datos que se incluyen en el Sitio Web. Las marcas publicadas son propiedad de sus respectivos dueños y solo se utilizan con fines de comercializar en el sitio los productos que fabrican. Se advierte a los Usuarios que tales derechos están protegidos por la legislación mexicana e internacional vigente relativa a la propiedad intelectual e industrial y son de su uso exclusivo.\n' +
            '      Queda expresamente prohibida la reproducción total o parcial de esta web o de cualquiera de sus contenidos, sin el permiso previo y por escrito de Jardepot. Asimismo queda totalmente prohibida la copia, reproducción, adaptación, modificación, distribución, comercialización, comunicación pública y/o cualquier otra acción que comporte una infracción de las leyes aplicables en materia de propiedad intelectual y/o industrial, así como el uso de los contenidos de la web si no es con la autorización previa y por escrito de Jardepot.\n' +
            '      Jardepot no concede licencia o autorización implícita alguna sobre los derechos de propiedad intelectual y/o industrial o sobre cualquier otro derecho o propiedad relacionado, directa o indirectamente, con los contenidos incluidos en el Sitio Web.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      12. Acceso y estancia en la web. Nuestros contenidos.\n' +
            '      <br>\n' +
            '      Los Usuarios y Usuarios son responsables de su conducta al acceder a la información del Sitio Web. Como consecuencia de lo anterior, los Usuarios y Usuarios serán los únicos responsables, frente a Jardepot y/o cualquier tercero, de:\n' +
            '      (i)las consecuencias que se puedan derivar de una utilización, con fines o efectos ilícitos o contrarios al presente documento, de cualquier contenido del Sitio Web, elaborado o no por Jardepot, publicado o no bajo su nombre de forma oficial; y\n' +
            '      (ii)las consecuencias que se puedan derivar de la utilización contraria al contenido de los TCU que sea lesiva de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar o deteriorar la web o sus servicios o impedir el normal disfrute de otros Usuarios o Usuarios.\n' +
            '      Jardepot se reserva el derecho a actualizar los contenidos del Sitio Web cuando lo estime conveniente, así como a eliminarlos, limitarlos o impedir el acceso a ellos, de manera temporal o definitiva, así como denegar el acceso a la web a Usuarios y Usuarios que hagan un mal uso de los contenidos y/o incumplan cualquiera de las condiciones establecidas en el presente documento.\n' +
            '      Jardepot informa que no garantiza:\n' +
            '      (i)que el acceso al Sitio Web y/o a los sitios web de enlace sea ininterrumpido o libre de errores;\n' +
            '      (ii)que el contenido o software al que los Usuarios y Usuarios accedan a través del Sitio Web o de los sitios web de enlace no contenga error alguno, virus informático u otros elementos en los contenidos que puedan producir alteraciones en su sistema o en los documentos electrónicos y ficheros almacenados en su sistema informático o de cualquier forma causen algún daño;\n' +
            '      (iii)el aprovechamiento que de la información o contenido del Sitio Web o sitios webs de enlace que los Usuarios y Usuarios pudieran realizar para sus propósitos personales.\n' +
            '      La información contenida en esta página web debe ser considerada por los Usuarios como divulgativa y orientadora, motivo por el cual Jardepot no garantiza la exactitud de la información contenida en el Sitio Web y por consiguiente no asume responsabilidad alguna sobre los posibles perjuicios o incomodidades para los Usuarios que pudiesen derivarse de alguna inexactitud presente en el mismo.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      13. Responsabilidad.\n' +
            '      <br>\n' +
            '      Jardepot no asume responsabilidad alguna derivada, de manera enunciativa más no limitativa de:\n' +
            '      (i)la utilización que los Usuarios &nbsp;puedan hacer de los materiales de este sitio web o de los sitios web de enlace, ya sean prohibidos o permitidos, en infracción de los derechos de propiedad intelectual y/o industrial de contenidos de la web o de terceros;\n' +
            '      (ii)los eventuales daños y perjuicios a los Usuarios causados por un funcionamiento normal o anormal de las herramientas de búsqueda, de la organización o la localización de los contenidos y/o acceso a la web y, en general, de los errores o problemas que se generen en el desarrollo o instrumentación de los elementos técnicos que la web o un programa facilite al Usuario;\n' +
            '      (iii)los contenidos de aquellas páginas a las que los Usuarios puedan acceder desde enlaces incluidos en la web, ya sean autorizados o no;\n' +
            '      (iv)los actos u omisiones de terceros, independientemente de la relación que dichos terceros pudieran tener con Jardepot;\n' +
            '      (v)el acceso de menores de edad a los contenidos incluidos en la web, así como el envío de información personal que estos pudieran realizar; ni\n' +
            '      (vi)las comunicaciones o diálogos en el transcurso de los debates, foros, chats y comunidades virtuales que se organicen a través de o entorno al Sitio Web y/o sitios web de enlace, ni responderá, por tanto, de los eventuales daños y prejuicios que sufran los Usuarios o Usuarios a consecuencia de dichas comunicaciones y/o diálogos.\n' +
            '      Asmismo Jardepot no será responsable en forma alguna, cuando se produzcan:\n' +
            '      (i)errores o retrasos en el acceso al Sitio Web a la hora de introducir los datos en el formulario de pedido, la lentitud o imposibilidad de recepción por parte de los destinatarios de la confirmación del pedido o cualquier anomalía que pueda surgir cuando tales incidencias sean debidas a problemas en la red Internet, caso fortuito o fuerza mayor o cualquier otra contingencia imprevisible ajena a Jardepot;\n' +
            '      (ii)fallos o incidencias que pudieran producirse en las comunicaciones, ya sea borrándose o por transmisiones incompletas, de manera que no se garantiza que los servicios del Sitio Web estén constantemente operativos;\n' +
            '      (iii)de los errores o daños producidos al Sitio Web por un mal uso del servicio por parte del Usuario;\n' +
            '      (iv)de la no operatividad o problemas en la dirección de e-mail facilitada por el Usuario para el envío de la confirmación del pedido;\n' +
            '      En todo caso, Jardepot se compromete a solucionar los problemas que puedan surgir y a ofrecer todo el apoyo necesario al Usuario para llegar a una solución rápida y satisfactoria de la incidencia.\n' +
            '      Asimismo, Jardepot tiene derecho a realizar durante intervalos temporales definidos, campañas promocionales para promover el registro de nuevos miembros en su servicio. Jardepot se reserva el derecho de modificar las condiciones de las campañas, así como prorrogarlas o proceder a la exclusión de cualquiera de los participantes de la campaña en caso que detecte cualquier anomalía, abuso o comportamiento poco ético en la participación de los mismos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      14. Políticas de privacidad.\n' +
            '      <br>\n' +
            '      Los Usuarios se comprometen a navegar por el Sitio Web y a utilizar el contenido del mismo de buena fe. La cumplimentación de cualquier formulario existente en el Sitio Web o la remisión de un correo electrónico a cualquiera de nuestros buzones implican la aceptación de estos TCU, así como la autorización a Jardepot para usar los datos facilitados por el Usuario o Usuario.\n' +
            '      Los datos de los Usuarios serán utilizados para el envío a través de e-mail de las campañas que realice Jardepot y para la entrega de las compras.<br>\n' +
            '      Por la mera visita a la web, los Usuarios no facilitan información personal alguna ni quedan obligados a facilitarla.\n' +
            '      El ordenador donde está alojado el Sitio Web utiliza cookies para mejorar el servicio prestado por Jardepot. Estas cookies se instalan automáticamente en el ordenador empleado por los Usuarios pero no almacenan ningún tipo de información relativa a éstos.\n' +
            '      Jardepot se compromete a guardar la máxima reserva y confidencialidad sobre la información que le sea facilitada y a utilizarla únicamente para los fines indicados.\n' +
            '      Jardepot presume que los datos proporcionados han sido introducidos por su titular o por persona autorizada por éste, así como que son correctos y exactos.\n' +
            '      Corresponde a los Usuarios la actualización de sus propios datos. En cualquier momento, el Usuario tendrá el derecho de acceso, rectificación, cancelación y oposición a sus datos personales. Para ejercitar esta facultad el Usuario deberá acceder al apartado “Mi Cuenta” en el Sitio Web. Por lo tanto, el Usuario es responsable de la veracidad y exactitud de sus datos personales.\n' +
            '      Conforme a la legislación vigente en materia de protección de datos, Jardepot ha adoptado los niveles de seguridad adecuados a los datos facilitados por los Usuarios y, además, ha instalado todos los medios y medidas a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y extracción de los mismos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '\n' +
            '      15. Nulidad.\n' +
            '      <br>\n' +
            '      En caso de que cualquier cláusula de los presentes TCU sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de los presentes TCU.\n' +
            '      Jardepot podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de Jardepot o prescripción de la acción que en cada caso corresponda.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      16. Modificación de los Términos y Condiciones de Uso.\n' +
            '      <br>\n' +
            '      Jardepot se reserva el derecho de modificar, en cualquier momento, la presentación y configuración del Sitio Web, así como los presentes TCU. Por ello, Jardepot recomienda al Usuario leerlas atentamente cada vez que acceda al Sitio Web. Los Usuarios y Usuarios siempre dispondrán de los TCU en un sitio visible, libremente accesible para cuantas consultas quiera realizar. En cualquier caso, la aceptación de los TCU será un paso previo e indispensable a la adquisición de cualquier producto disponible a través del Sitio Web.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '      \n' +
            '      17.Ley y jurisdicción aplicable.\n' +
            '      <br>\n' +
            '      Las presentes TCU se rigen por la legislación mexicana aplicable. Para resolver cualquier controversia o conflicto que se derive de los presentes TCU, las partes se someten a la jurisdicción de los tribunales de la Ciudad de Cuernavaca, Morelos.';
        const dialogRef = this.dialog.open(DialogComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Aviso legal';
        dialogRef.componentInstance.body = textBody;
    }
}
