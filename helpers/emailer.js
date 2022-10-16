const nodemailer = require("nodemailer");


//Función Principal de Transport
const createTrans = () => {
    const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d33b7d11a5ffd1",
    pass: "3cf81f43fbddcf",
  },
});
    return transport;
}

const sendMailUsuario = async (usuario) => {
    const transporter = createTrans()
    const info = await transporter.sendMailUsuario({
      from: '"e-Shop" <registro@eShop.com>',
      to: `${usuario.correo}`,
      subject: `Registro de ${usuario.nombre}`,
      html: `<h1>Hola ${usuario.nombre}</h1>
            <hr>
            <h2>Bienvenido a nuestro sitio e-Shop</h2>
            </br>
            <p>Gracias, por registrarse.</p>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ullamcorper nisi, eget auctor nisi. Mauris id commodo turpis. Quisque in congue massa, eu euismod orci. Praesent condimentum sodales massa, placerat vestibulum nibh congue non. In semper est in urna posuere, in fringilla diam sodales. </p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return 

}

const sendMailOrden = async (orden) => {
  const transporter = createTrans();
  const info = await transporter.sendMailUsuario({
    from: '"e-Shop" <registro@eShop.com>',
    to: `${orden.usuario}`,
    subject: `Orden ${orden._id}!`,
    html: `<h2>Su orden fue registrada con el número ${orden._id}</h2>
            </br>
            <p>Gracias, por su compra.</p>
            </br>
            <hr>
            <h3>El detalle de su compra es el siguiente: </h3>
            </br>
            <p>${orden[carrito.productos[producto.nombre]]}</p>
            <p>${orden[carrito.productos[producto.precio]]}</p>
            <p>${orden.cantidad}</p>
            <p>*****************************</p>
            <p>${orden.total}</p>
            <p>*****************************</p>
      `,
  });

  console.log("Message sent: %s", info.messageId);
  return;
};
exports.sendMailUsuario = (usuario) => sendMailUsuario(usuario),
exports.sendMailOrden = (orden) => sendMailOrden(orden)


