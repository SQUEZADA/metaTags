# Guía sobre el uso compartido de contenido para administradores web

En este documento se describe cómo optimizar el contenido alojado en la web que se comparte en Facebook y Twitter, independientemente de si se comparte desde un ordenador, una web móvil o una aplicación para móviles.


# Facebook

La mayor parte del contenido se comparte en Facebook en forma de URL, de modo que es importante que marques tu sitio web con etiquetas de Open Graph para controlar cómo se muestra el contenido en Facebook. Para que el rastreador pueda compartir correctamente tu sitio web, el servidor también debe utilizar las codificaciones gzip y deflate. [Documentación](https://developers.facebook.com/docs/sharing/webmasters/#testing)

## Código de Ejemplo
A continuación se incluye un ejemplo de cómo marcar un artículo, una noticia o una publicación en el blog con la etiqueta `og:type="article"` y varias propiedades adicionales:

    <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" /> 
    <meta property="og:type" content="article" />
    <meta property="og:title" content="When Great Minds Don’t Think Alike" /> 
    <meta property="og:description" content="How much does culture influence creative thinking?" />
    <meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />

## Etiquetas básicas

|Etiqueta|  Descripción|Requerido|
|--|--|--|
| og:url | URL canónica de la página. Debe ser la URL básica, sin variables de sesión, parámetros de identificación de usuario ni contadores. [Ver mas](https://developers.facebook.com/docs/sharing/webmasters/)|Si|
|og:title| Título del artículo sin ningún tipo de identificación de marca, como el nombre del sitio.|Si|
|og:description| Breve descripción del contenido, normalmente entre dos y cuatro oraciones. Se mostrará debajo del título de la publicación en Facebook.|Si|
|og:image| URL de la imagen que se muestra cuando se comparte el contenido en Facebook.|Si|
|fb:app_id| Para poder usar los insights de Facebook, debes añadir el identificador de la aplicación a tu página.|No|
|og:type| Tipo de contenido multimedia. Esta etiqueta influye en cómo se muestra el contenido en la sección de noticias. Si no se especifica ningún tipo, el valor predeterminado es website.|No|
|og:locale| Configuración regional del recurso. El valor predeterminado es en_US. También se puede usar `og:locale:alternate` si hay disponibles traducciones a otros idiomas|No|

# Twitter

La tarjeta de resumen se puede utilizar para muchos tipos de contenido web, desde publicaciones de blog y artículos de noticias hasta productos y restaurantes. Está diseñado para dar al lector una vista previa del contenido antes de hacer clic en su sitio web. [Documentación](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)

## Código de Ejemplo

A continuación se incluye un ejemplo de cómo marcar un artículo, una noticia o una publicación en el blog con la etiqueta `twitter:site="@flickr"` y varias propiedades adicionales:

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@flickr" />
    <meta name="twitter:title" content="Small Island Developing States Photo Submission" />
    <meta name="twitter:description" content="View the album on Flickr." />
    <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />

## Etiquetas básicas

|Etiqueta|  Descripción|Requerido|
|--|--|--|
| twitter:card | Debe establecerse en un valor de "summary"|Si|
|twitter:site| El @nombredeusuario de Twitter al que debe atribuirse la tarjeta.|No|
|twitter:title| Un título conciso para el contenido relacionado.|Si|
|twitter:description| Una descripción que resume de manera concisa el contenido según corresponda para la presentación dentro de un Tweet. No debe reutilizar el título como descripción ni utilizar este campo para describir los servicios generales proporcionados por el sitio web.|No|
|twitter:image| Una URL a una imagen única que representa el contenido de la página. No debe usar una imagen genérica como el logotipo de su sitio web, la foto del autor u otra imagen que abarque varias páginas. Las imágenes para esta Tarjeta admiten una relación de aspecto de 1:1 con dimensiones mínimas de 144x144 o máximas de 4096x4096 píxeles. Las imágenes deben tener un tamaño inferior a 5 MB.|No|
|twitter:image:alt| Una descripción de texto de la imagen que transmite la naturaleza esencial de una imagen a los usuarios con discapacidad visual. Máximo 420 caracteres.|No|

## Script para agregar los tags

    metaTagList = [ 
	    {name:"og:url",content:""},
	    {name:"og:title",content:""},
	    {name:"og:description",content:""},
	    {name:"og:image",content:""},{name:"fb:app_id",content:""},
	    {name:"og:type",content:""},{name:"og:locale",content:""},
	    {name:"twitter:card",content:""},
	    {name:"twitter:site",content:""},
	    {name:"twitter:title",content:""},
	    {name:"twitter:description",content:""},
	    {name:"twitter:image",content:""},
	    {name:"twitter:image:alt",content:""},
	];
	metaTagList.map( (tag)=>{
		var  tagFound = Array.from(document.querySelectorAll(`meta[name='${tag.name}']`));
		if(tagFound.length > 0){ 
			console.log("tag found",tagFound);
			return  tagFound[0];
		}else{
			console.log("tag not found")
			var newMeta = document.createElement("meta");
			newMeta.setAttribute("name",tag.name);
			newMeta.setAttribute("content",tag.content);
			var  header = document.querySelector("head")
			header.appendChild(newMeta)
			return {}
		}
	})
