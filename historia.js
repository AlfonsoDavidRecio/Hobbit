import {claseGuerrero, claseMago, claseClerigo, claseSaqueador, razaHobbit,claseArquero} from "./clase_raza.js";
import {Personaje} from "./personaje.js";
import {Hobbit} from "./hobbit.js";
import {Humano} from "./humano.js";
import {Enano} from "./enano.js";
import {Elfo} from "./elfo.js";
import {Orco} from "./orco.js";
import {HobbitCorrompido} from "./hobbitCorrompido.js";
import {Narrador} from "./narrador.js";
import {Objeto} from "./objeto.js";
import {Bebida} from "./bebida.js";
import {Arma} from "./arma.js";


//El error de tipo MIME se da por no haber puesto la extension en el from

export class Historia{
    //Personajes usados en las distintas escenas de la historia
    #narrador = new Narrador()
    #bilbo = new Hobbit('Bilbo Bolson',claseGuerrero)
    #gandalf = new Humano('Gandalf El Gris',claseMago)
    #kili = new Enano('Kili',claseGuerrero,"Roja")
    #fili = new Enano('Fili',claseGuerrero,"Amarilla")
    #legolas = new Elfo("Legolas", claseArquero)
    #brokk = new Enano("Brokk", claseGuerrero, "Plateada")
    #azog = new Orco("Azog", claseGuerrero)
    #gollum = new HobbitCorrompido("Gollum")
    #opcionConfirm=null
    #opcionPrompt = null
    #numEscena = null
    #patadaGollum = null
    constructor(){
        this.#opcionConfirm = false
        this.#opcionPrompt = ""
        this.#numEscena = 1
        this.#patadaGollum = 0
    }
    cuento(){
        this.inicioCuento()
        let boton = document.getElementById('btnSiguiente')
        boton.onclick = this.gestionEscenas
        this.esc1()
        let botonReinicio = document.getElementById('btnReinicio')
        botonReinicio.onclick = this.reinicio

    }
    reinicio(){
        window.location.reload()
    }
    inicioCuento(){
        this.#narrador.inicio("En el vasto y mágico mundo de la Tierra Media, donde antiguas leyendas y nuevos destinos se entrelazan, emerge una nueva historia llena de aventura y valentía." +
            "Desde la acogedora madriguera de un hobbit se cocina una nueva historia llena de aventura y acción donde se decidirá el destino de sus vidas. ¿Estás preparado para embarcarte en esta odisea?")
    }
    finalCuento(opcion){
        document.getElementById('btnReinicio').style.display = 'block'
        switch (opcion){
            case 1:
                this.#narrador.final("Un giro inesperado ha puesto fin a la historia de nuestros protagonistas y en un abrir y cerrar de ojos se acabó todo. La Tierra Media seguirá bien por un tiempo hasta que una nueva y poderosa amenaza se cierne sobre sus tierras...Puedes evitarlo dando al botón de siguiente capítulo.")
                break
            case 2:
                this.#narrador.final("Este ha sido el trágico final de la aventura. El destino de Gandalf le lleva por un nuevo camino dejando atrás toda su tierra y su mundo condenando así a la Tierra Media a una nueva época de tiranía. Próxima parada de Gandalf en...Harry Potter y la Piedra Filosofal.")
                break
            case 3:
                this.#narrador.final("El mal prevaleció, la luz se apagó y la historia de la Tierra Media llegará a un fin amargo. La oscuridad de Azog envolvió todo, dejando un legado de desolación y desesperanza. La Tierra Media, en su hora más oscura, fue condenada a una eternidad de sombras, sin héroes para resistir la marea del mal.")
                break
            case 4:
                this.#narrador.final("Aunque la batalla contra Azog había llegado a su fin, los héroes sabían que el mundo estaba lleno de misterios y que nuevas historias les esperaban en el horizonte. Con el corazón lleno de valentía y la experiencia grabada en sus almas, se embarcaron en sus propios caminos, listos para enfrentar lo que el destino les tenía reservado en el futuro de la Tierra Media.\nPróxima parada...El señor de los anillos: La comunidad del anillo.")
                break
        }
    }

    gestionEscenas = () => {
        this.#numEscena++
        switch(this.#numEscena) {
            case 2:  
                this.#opcionConfirm = confirm("En el camino se encuentran a un enemigo. ¿Deberían luchar?")
                if(this.#opcionConfirm){
                    this.esc2()
                }else{
                    this.#numEscena++
                    this.esc3()
                }
                break
            case 3: 
                if(this.#numEscena===3){
                    this.esc3()
                }
                break
            case 4:
                do{
                    this.#opcionConfirm = confirm("Gandalf: ¿Deberiamos de ir a la Biblioteca?")
                    if(this.#opcionConfirm){    
                        this.esc4()
                    }
                }while(!this.#opcionConfirm)
                break
            case 5:
                this.#opcionPrompt = prompt ("¿Narrador: Nuestros amigos deberian de ir directamente al Castillo o pasar por la Armeria?\nOpciones:\na: Armeria\t b: Castillo")
                if(this.#opcionPrompt ==="a" || this.#opcionPrompt ==="A"){
                    this.esc5()
                }else if(this.#opcionPrompt ==="b" || this.#opcionPrompt ==="B"){
                    this.#numEscena=8
                    this.esc8()
                }else{
                    //Si has respondido algo diferente a lo que te proponen se vuelse a ir a la escena 4 y cuando vuelvas a pulsar siguiente capitulo te vuelven a hacer la pregunta
                    this.#numEscena=4
                    this.esc4()
                }
                break
            case 6:
                this.#opcionConfirm = confirm("Narrador: ¿Deberian cambiar de armas?")
                if(this.#opcionConfirm){    
                    this.esc6()
                }else{
                    this.#numEscena=8
                    this.esc8()
                }
                break
            case 7:
                this.#opcionPrompt = prompt ("¿Que arma deberia de empuñar Fili?\nOpciones:\na: Espada\t b: Hacha\tc: Arco\nd: Glaive\t\te: Bombas")
                switch(this.#opcionPrompt){
                    case 'a':
                        let espada = new Arma("Espada")
                        this.#fili.coger(espada)
                        this.#numEscena=8
                        this.esc8()
                        break
                    case 'b':
                        let hacha = new Arma("Hacha")
                        this.#fili.coger(hacha)
                        this.#numEscena=8
                        this.esc8()
                        break
                    case 'c':
                        let arco = new Arma("Arco")
                        this.#fili.coger(arco)
                        this.#numEscena=8
                        this.esc8()
                        break
                    case 'd':
                        let glaive = new Arma("Glaive")
                        this.#fili.coger(glaive)
                        this.#numEscena=8
                        this.esc8()
                        break
                    case 'e':
                        this.esc7()
                        this.#numEscena = 5 //5 por que cuando se purse el boton de siguiente quiero que sea un 6 para acceder de nuevo a la escena 6
                        break
                    default:
                        //Al haber respondido diferente de las opciones disponibles vuelvea a la escena 6 y cuando des en el boton se te vuelve a hacer la pregunta
                        this.#numEscena=6
                        this.esc6()
                }
                break
            //No hace falta hacer case 8 dado a la escena 8 se ha accedido mediante algunas opciones de anteriores preguntas.
            case 9:
                this.#opcionPrompt = prompt ("¿Que arma camino deberian de escoger?\nOpciones:\na: Bosque\t b: Pantano")
                if(this.#opcionPrompt ==="a" || this.#opcionPrompt ==="A"){
                    this.esc9()//Bosque
                }else if(this.#opcionPrompt ==="b" || this.#opcionPrompt ==="B"){
                    this.#numEscena = 13
                    this.esc13()//Pantano
                }else{
                    //Si has respondido algo diferente a lo que te proponen se vuelse a ir a la escena 8 y cuando vuelvas a pulsar siguiente capitulo te vuelven a hacer la pregunta
                    this.#numEscena=8
                    this.esc8()
                }
                break
            case 10:
                this.#opcionConfirm = confirm("Narrador: ¿Deberia Legolas hacer caso a Azog?")
                if(this.#opcionConfirm){
                    this.esc10()
                }else{
                    this.#numEscena=8
                    this.esc8()
                }
                break
            case 11:
                this.#opcionConfirm = confirm("Narrador: ¿Deberia Gandalf usar la Varita de Sauco?")
                if(this.#opcionConfirm){
                    this.#numEscena=20 //Fin
                    this.esc11()
                }else{
                    this.#numEscena=20 //Fin
                    this.esc12()
                }
                break
            //No hay case 12 por que ya esta puesto como respuesta negativa en el case 11 dado que para acceder a la escena del final malo debes responder b
            //Al la escena 13 ya has accedido al responder b al salir del castillo en el case 9
            case 13:
                this.esc13() //La manera de acceder aqui es despues de la escena 14, escena de la cueva
                break
            case 14:
                this.#opcionConfirm = confirm("Narrador: ¿Deberian mirar en la cueva de en frente?")
                if(this.#opcionConfirm){
                    this.esc14()//Cueva
                    this.#numEscena=12 //12 por que como la cueva es un bucle para la proxima vez quiero que vayan al pantano. Cuando se pulsa el boton, se suma 1 por lo que entra en el case 12
                }else{
                    this.#numEscena=15
                    this.esc15()//Pelea Azog
                }
                break
            case 16:
                this.#opcionConfirm = confirm("Narrador: ¿Deberían  retroceder?")
                if(this.#opcionConfirm){
                    this.#numEscena=15
                    this.esc15()//Pelea Azog. Vuelven a repetir la escena
                    //Como el this.#opcionConfirm es true aparecerá una frase extra evidenciando que han vuelto a la batalla
                }else{
                    this.#numEscena=20
                    this.esc16()
                }
                break
          }
    }
    

    vaciarDivHistoria(){
        document.getElementById('divHistoria').innerHTML = ""
    }

    cambioEscena(imagen){
        document.body.style.backgroundImage = 'url(img/'+imagen+')' //Texto de la imagen
    }

    esc1(){
        let agua = new Bebida("Agua")
        let limonada = new Bebida("Limonada")
        let pipa = new Objeto("Pipa")

        let espada = new Arma("Espada")
        let varita = new Arma("Varita")
        this.#narrador.tituloEscena("CASA BILBO")

        this.#narrador.narrar("De pronto en la casa aparecieron otros miembros de la compañía en medio de risas y algarabía. Gandalf, con su característica barba y sombrero puntiagudo, les dio la bienvenida con una sonrisa.\n")

        this.#gandalf.hablar("¡Bienvenidos, valientes! Estoy seguro de que el viaje hasta aquí fue lleno de aventuras.")
        this.#narrador.narrar("Fili se adelantó y abrazó a Bilbo con fuerza.")
        this.#fili.hablar("Bilbo, mi querido amigo, ¿Qué tal estás?")
        this.#bilbo.hablar("¡Emocionado de tenerlos aquí a todos! Por favor pasad e iros sentando en la mesa. ¿Os traigo algo para beber? ")
        this.#fili.hablar("Dame un vaso de agua por favor.")
        this.#kili.hablar("A mi traeme una buena limonada.")

        this.#bilbo.coger(agua)
        this.#bilbo.pasar(agua,this.#fili)
        this.#bilbo.coger(limonada)
        this.#bilbo.pasar(limonada,this.#kili)

        this.#fili.beber(agua)
        this.#kili.beber(limonada)

        this.#fili.hablar("Muchas gracias por el agua.")
        this.#kili.hablar("Gracias por la limonada, estaba buenisima.")
        this.#bilbo.hablar("Si necesitais algo mas decidmelo. Venid a la mesa que Gandalf nos quiere contar algo.")
        this.#gandalf.hablar("Mis amigos, el propósito de nuestra visita va más allá de la mera camaradería. He descubierto que en el Nanami Palace se encuentra la varita de Saúco, un objeto de gran poder. Y creo que nosotros, con nuestras habilidades y valentía, somos los indicados para buscarla.")
        this.#narrador.narrar("Las miradas se tornaron serias mientras Gandalf explicaba la importancia de esta misión. Fili asintió con solemnidad.")
        this.#fili.hablar("Si hay algo que pueda fortalecer nuestra posición en la comarca, estoy dispuesto a buscarlo.")
        this.#narrador.narrar("Gandalf continuó describiendo el viaje que les aguardaba y los desafíos que podrían enfrentar. Pero en sus ojos brillaba una chispa de emoción y determinación.")
        this.#gandalf.hablar("Creo que al encontrar la varita, descubriremos un poder que puede cambiar el curso de nuestras vidas y proteger mejor estas tierras.")
        this.#narrador.narrar("La compañía, instigada por la posibilidad de aventuras aún mayores, aceptó la tarea con entusiasmo. Bilbo, sintiendo la emoción en el aire, se levantó y brindó por la nueva aventura.")
        this.#bilbo.hablar("¡Por la búsqueda de la varita de Saúco y por las aventuras que nos esperan!")
        this.#narrador.narrar("Kili y fili están tan contentos que se ponen a celebrar por la nueva aventura")
        Enano.celebrar()
        this.#narrador.narrar("Kili, contagiado por el espíritu festivo, se acercó a Bilbo y le entregó su pipa.")

        this.#kili.coger(pipa)
        this.#kili.pasar(pipa,this.#bilbo)
        this.#bilbo.fumar(pipa)

        this.#bilbo.hablar("Muchas gracias Kili. Me la llevaré en el viaje.")
        this.#gandalf.hablar("Equipense con sus armas y marchemos.")

        this.#gandalf.coger(varita)
        this.#bilbo.coger(espada)
        this.#kili.coger(espada)
        this.#fili.coger(espada)

        this.#bilbo.hablar("Kili y fili coged mas agua y limonada si quereis para el camino.")
        this.#kili.hablar("De acuerdo")
        this.#fili.hablar("Muchas gracias señor Bolson")

        this.#fili.coger(agua)
        agua.caer("Fili")
        this.#kili.coger(limonada)

        this.#bilbo.hablar("Gandalf, viejo amigo, me hallo entusiasmado por emprender esta aventura y salir de la comarca.")
        this.#gandalf.hablar("Oye Bilbo, esta búsqueda va más allá de un simple objeto. Siento que hay fuerzas mayores en juego, y confío en que tú, con tu astucia, serás crucial en esta misión.")
        this.#narrador.narrar("Bilbo asintió, con una mezcla de nerviosismo y emoción. La compañía decidió que lo primero sería obtener información en la biblioteca de Rivendell donde esperaban encontrar mapas del Nanami Palace y datos sobre el camino que debían seguir.")
    }

    esc2(){
        this.cambioEscena("camino.jpg")
        this.vaciarDivHistoria()
        let lizardMan = new Elfo("LizardMan",claseSaqueador)

        this.#narrador.tituloEscena("LIZARDMAN")
        this.#narrador.narrar("Mientras avanzaban por el camino, la compañía se encontró con un LizardMan que bloqueaba su paso. El reptil escamoso se erguía con ferocidad, listo para el combate. Los enanos desenvainaron sus armas, listos para la pelea.")

        lizardMan.hablar("Me llamo LizardMan. Soy un Elfo terrorifico y si quereis seguir adelante tendreis que enfrentaros a mis poderes de lagarto.")
        this.#fili.hablar("¡Preparados, enanos! No dejaremos que esto nos detenga.")

        this.#narrador.narrar("Los enanos se lanzaron al ataque, enfrentándose valientemente al LizardMan. Gandalf, con su bastón en mano, se preparó para un hechizo.")

        this.#gandalf.hablar( "¡Tenedlos ocupados, enanos! Les mostraré un poco de magia.")

        this.#narrador.narrar("Mientras los enanos distraían al enemigo con hábiles movimientos, Gandalf lanzó un potente rayo mágico que impactó directamente en el LizardMan.")
        lizardMan.agonizar("El pecho",this.#gandalf)
        this.#narrador.narrar("El reptil rugió de dolor, pero la lucha continuaba.")
        this.#narrador.narrar("Bilbo, observando la situación, no pudo contener la risa ante la peculiaridad de la escena.")

        this.#bilbo.hablar("¡Esto es realmente increíble! ¡No puedo dejar de reír!")
        this.#bilbo.reir()

        this.#narrador.narrar("A pesar de la distracción de Bilbo, los enanos continuaron luchando con determinación. Sin embargo, el LizardMan, debilitado por el ataque mágico, no pudo resistir mucho más.")
        this.#narrador.narrar("Finalmente, con un golpe certero, Fili logró derrotar al enemigo.")

        this.#fili.hablar("¡Bien hecho, compañeros!")
        Enano.celebrar()
        this.#fili.hablar("Sigamos nuestro camino hacia el hostal.")

        this.#narrador.narrar("Aunque los enanos habían recibido algunos golpes durante la pelea, estaban aliviados de haber superado el obstáculo. La compañía continuó su camino hacia el hostal, con la experiencia de la batalla fortaleciendo su espíritu mientras se preparaban para la siguiente etapa de su búsqueda.")
    }

    esc3() {
        this.vaciarDivHistoria()
        let dardo = new Arma("Dardo")

        this.#narrador.tituloEscena("HOSTAL")
        this.#narrador.narrar("Al entrar en el hostal, la compañía notó la presencia de un rostro familiar: Legolas. La alegría iluminó los ojos de Bilbo y Gandalf al ver a su antiguo amigo.")

        this.#legolas.hablar("Bilbo, Gandalf. Un placer encontraros. Estaba de camino a vuestra morada, pero parece que os he adelantado.")

        this.#narrador.narrar("Legolas, con la elegancia característica de los elfos, se acercó a Bilbo y le entregó su espada Dardo, meticulosamente restaurada en el pueblo elfo.")

        this.#legolas.hablar("Espera un momento que voy a coger una cosa que te he traído")
        this.#legolas.coger(dardo)
        this.#legolas.hablar("Aquí tienes, Bilbo. Tu espada está lista para el deber.")
        this.#legolas.pasar(dardo,this.#bilbo)

        this.#bilbo.hablar("Aprecio tu trabajo, Legolas. Pero, ¿a qué se debe tu visita?")
        this.#legolas.hablar("Me encomendaron la misión de traer de vuelta tu espada. Os veo muy contenido y entusiasmado. ¿Qué es lo que tenéis entre manos?")

        this.#narrador.narrar("Bilbo compartió la misión de la compañía en busca de la varita de Saúco, subrayando la importancia de la tarea. La invitación para unirse al grupo fue extendida a Legolas.")

        this.#bilbo.hablar("¿Te gustaría unirte a nosotros, Legolas? Tu habilidad con el arco y tu destreza serían invaluables.")
        this.#legolas.hablar("Por supuesto. Será un honor acompañaros.")

        this.#narrador.narrar("Para celebrar la incorporación de Legolas al grupo, decidieron tomarse unas cervezas en el hostal. En medio de la conversación, Kili propuso un nombre para el grupo.")

        this.#kili.hablar("Para celebrar la incorporación de Legolas al grupo, decidieron tomarse unas cervezas en el hostal. En medio de la conversación, Kili propuso un nombre para el grupo.")

        this.#narrador.narrar("Las risas estallaron, y todos aceptaron el nombre con entusiasmo, sellando así la unión del grupo formado por Gandalf, Bilbo, Kili, Fili y Legolas: Cerdo Agridulce. Con la promesa de nuevas amistades y aventuras, la compañía brindó por lo que les deparaba el destino.")
    }

    esc4() {
        this.cambioEscena("biblioteca.jpg")
        this.vaciarDivHistoria()
        let antonieta = new Elfo("Antonieta", claseClerigo)
        let mapas = new Objeto("Mapas del Nanami Palace")

        this.#narrador.tituloEscena("BIBLIOTECA")
        this.#narrador.narrar("Después de llegar a la Biblioteca de Rivendell, Gandalf sugiere buscar la ayuda de la bibliotecaria Antonieta. Llaman a la bibliotecaria, una elfa sabia y conocedora de la vasta colección de conocimientos del lugar.")

        this.#gandalf.hablar("Antonieta, necesitamos tu sabiduría para encontrar mapas detallados del Nanami Palace. ¿Nos puedes guiar?")

        antonieta.hablar("Por supuesto, seguidme. Sé exactamente dónde encontrar lo que buscáis.")

        this.#narrador.narrar("La bibliotecaria Antonieta llevó al grupo a través de los pasillos llenos de estanterías y pergaminos. Pronto, llegaron a una sección especial que contenía los mapas detallados que necesitaban.")

        antonieta.hablar("Aquí tenéis, los mapas del Nanami Palace. Espero que os sean de utilidad.")
        this.#gandalf.coger(mapas)

        this.#narrador.narrar("La compañía agradeció a Antonieta por su ayuda y se reunió alrededor de una mesa en la biblioteca para analizar detenidamente los mapas. Gandalf señaló las rutas, posibles obstáculos y detalles cruciales que les ayudarían en su travesía.")

        this.#gandalf.hablar("Con esta información, estaremos mejor preparados para enfrentar los desafíos que nos aguardan.")

        this.#narrador.narrar("Después de un análisis exhaustivo, decidieron partir de la biblioteca con la certeza de que estaban armados con el conocimiento necesario.")

        this.#fili.hablar("Gracias, Antonieta. Nos has brindado una gran ayuda.")

        antonieta.hablar("Que tengáis un viaje seguro, valientes viajeros.")

        this.#narrador.narrar("La compañía se despidió de Antonieta y salió de la biblioteca, con los mapas en mano y la determinación renovada para alcanzar el Nanami Palace y encontrar la varita de Saúco. Su siguiente destino era la armería.")
    }

    esc5(){
        this.cambioEscena("armeria.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("ARMERÍA")
        this.#narrador.narrar("Fili guió a sus compañeros hacia la imponente armería de su abuelo, Brokk, un maestro artesano conocido en toda la Tierra Media por sus habilidades con el metal. Al entrar, el resonar metálico de las armas colgadas en las paredes creó una atmósfera que resonaba con la historia y la destreza de Brokk.")

        this.#fili.hablar("Bienvenidos a la armería de mi abuelo. Aquí encontraremos el equipo que necesitaremos para nuestra aventura.")

        this.#narrador.narrar("Brokk, un anciano enano con una barba plateada que rivalizaba con el brillo de las espadas, los recibió con una sonrisa orgullosa.")

        this.#brokk.hablar("Fili, mi muchacho, ¿en qué puedo ayudaros hoy?")

        this.#fili.hablar("Necesitamos un cambio de armas para nuestra próxima travesía, abuelo. Algo que se ajuste a la tarea que tenemos por delante.")

        this.#narrador.narrar("Brokk asintió con sabiduría, consciente de las demandas de la próxima aventura.")

        this.#brokk.hablar("Por supuesto, Fili. Echemos un vistazo a lo que tengo disponible.")

        this.#narrador.narrar("Mientras Fili buscaba un cambio de armas, una discusión animada surgió entre Kili y él sobre cuál sería la mejor arma para la travesía, especialmente para explorar cuevas estrechas.")

        this.#kili.hablar("La espada corta es más versátil y rápida. ¡Definitivamente la mejor elección!")

        this.#fili.hablar("Pero la lanza de una mano tiene mayor alcance y nos permitirá mantener a los enemigos a raya.")

        this.#narrador.narrar("La disputa continuó mientras Gandalf, en otra sección de la armería, exploraba bastones y varitas mágicas.")

        this.#gandalf.hablar("Brokk, mi viejo amigo, ¿qué puedes decirme sobre estos bastones y varitas? ¿Algún artefacto especial entre ellos?")

        this.#narrador.narrar("Brokk compartió su conocimiento sobre los objetos mágicos, señalando detalles sobre su fabricación y propiedades. Mientras tanto, Bilbo, curioso como siempre, exploraba la tienda y descubría una sección especial de las mejores armas de Brokk.")

        this.#bilbo.hablar("¡Vaya! Parece que aquí guardas tus verdaderos tesoros, Brokk.")

        this.#narrador.narrar("El anciano enano sonrió con complicidad, indicando que aquel rincón contenía las armas más exquisitas y poderosas de su colección. Con la armería repleta de decisiones y elecciones, la compañía se preparaba para su siguiente fase, equipándose con las mejores herramientas que Brokk tenía para ofrecer.")
    }

    esc6(){
        this.cambioEscena("armeria.jpg") //Si has entrado en la escena 7 ya no aparecera ese fondo
        this.vaciarDivHistoria()   
        this.#narrador.tituloEscena("ARMAMENTO")
        this.#narrador.narrar("Dentro de la bulliciosa armería, Brokk, con su experiencia forjada en el metal, alentó a Kili a probar las diferentes armas dispuestas en el estante. Cada arma deslumbraba con su propio resplandor.")
        
        this.#brokk.hablar("Kili, mi amado nieto, prueba estas armas y elige la que sientas que se adapta mejor a tu habilidad.")

        this.#narrador.narrar("Kili, entusiasmado, sopesó las opciones: una espada bastarda que relucía con destreza, un hacha de guerra con grabados élficos, un arco compuesto que cantaba a la precisión, una glaive que emanaba poder, y un par de bombas meticulosamente elaboradas.")

        this.#kili.hablar("¡Estas bombas parecen fascinantes! ¿Qué opinan, compañeros?")

        this.#narrador.narrar("Fili, más cauto, aconsejó:")

        this.#fili.hablar("No estoy seguro de que las bombas sean la mejor elección. Son impredecibles y podríamos necesitar algo más práctico para una misión como esta.")

        this.#narrador.narrar("A Bilbo le llamó la atención una bomba.")
        Personaje.sorprender(this.#bilbo,"una bomba")
        this.#narrador.narrar("Bilbo, observando con dudas la selección de armas, planteó la idea de seguir directamente al castillo.")
        
        this.#bilbo.hablar("¿Realmente necesitamos un cambio de armas? Tal vez deberíamos dirigirnos directamente al castillo.")

        this.#narrador.narrar("En medio de la indecisión, Legolas, con su destreza con el arco, tomó una decisión.")
        
        this.#legolas.hablar("Optaré por el arco. La precisión será esencial en nuestro viaje.")

        this.#narrador.narrar("La compañía se encontraba ante la encrucijada de elegir su armamento para la búsqueda de la varita de Saúco. Mientras Kili sostenía las bombas con fascinación, Fili advertía sobre su peligro potencial. Bilbo, con su sabiduría hobbit, cuestionaba la necesidad de un cambio. Legolas, siempre hábil con el arco, tomaba una decisión que reflejaba su experiencia. En este instante crucial, la elección de armas resonaría en los desafíos que les aguardaban en el Nanami Palace.")
   
    }

    esc7(){
        this.cambioEscena("explosion.gif")
        let bomba = new Arma("Bomba")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("INCIDENTE EN LA ARMERÍA")
        this.#narrador.narrar("Un momento de tensión se apoderó de la armería cuando Bilbo decidió recoger las bombas a pesar de las advertencias. La elección desencadenó una serie de eventos que cambiarían el curso de la historia.")
        
        this.#bilbo.hablar("Quizás podríamos... ¡Oh!")
        this.#bilbo.coger(bomba)
        this.#narrador.narrar("Las bombas, al pesar más de lo esperado, resbalaron de las manos de Bilbo y cayeron al suelo de la armería. Un instante de silencio precedió al caos inminente.")
        this.#narrador.narrar("Todos, con horror, gritaron para que Bilbo se apartara mientras las bombas se encontraban en el suelo. Pero antes de que pudieran reaccionar, la tienda estalló en una tormenta de fuego y escombros.")
        this.#narrador.narrar("Los gritos se mezclaron con el estruendo de la explosión, y en un instante, la armería se transformó en un caos de llamas y polvo. La compañía, atrapada en la violenta explosión, quedó envuelta en una danza caótica de destrucción.")
        this.#narrador.narrar("La luz cegadora de la explosión se desvaneció, revelando el resultado devastador. La armería, antes repleta de armas y promesas de aventura, quedó reducida a escombros. Los miembros de la compañía, ahora abrasados y pulverizados, yacían en el suelo, su destino truncado por la trágica elección de Bilbo.")
        this.#narrador.narrar("En ese instante sombrío, la historia tomó un giro inesperado, dejando tras de sí la fragilidad de las decisiones y las consecuencias irreversibles de un error fatal.")

        //Final Cuento
        this.finalCuento(1)
    }

    esc8(){
        this.cambioEscena("castillo.jpg")
        this.vaciarDivHistoria()
        let varitaSauco = new Arma("VaritaSauco");

        this.#narrador.tituloEscena("CASTILLO")
        this.#narrador.narrar("Cerdo Agridulce se encontraba frente a las majestuosas puertas del Nanami Palace, el destino anhelado de su búsqueda. Con paso decidido, entraron en el castillo, explorando sus intrincados pasillos y salones. La primera planta les recibió sin complicaciones, pero al subir a la segunda, se encontraron con una puerta bloqueada por una imponente piedra.")

        this.#gandalf.wingardiumLeviosa()

        this.#narrador.narrar("El camino parecía tranquilo hasta que alcanzaron la tercera planta. Una habitación majestuosa se abrió ante ellos, con grandes ventanales que dejaban entrar la luz. En el centro, sobre una mesa de piedra vertical, reposaba la varita de Saúco.")

        this.#narrador.narrar("Legolas, emocionado, corrió hacia la varita. ")
        this.#gandalf.hablar("¡Cuidado, Legolas, no vayas!")

        this.#narrador.narrar("En ese preciso instante, una pared se derrumbó, revelando dos monstruos. Uno grande, un orco imponente llamado Azog, y otro más pequeño, casi calvo, que se lanzó hacia el resto del grupo.")
        this.#narrador.narrar("Azog agarró a Legolas y lo arremetió contra el suelo antes de pegarle una paliza y cogiendo varita de Saúco y clavársela en el ojo. ")
        
        this.#legolas.grito("ahhhhh mi ojo")

        this.#narrador.narrar("El monstruo gigante lo lanzaba a un lado.")
        this.#narrador.narrar("El monstruo calvo va con Azog. En un acto de violencia desenfrenada, Azog golpeó a Legolas repetidamente antes de lanzar un desafiante ultimátum.")

        this.#azog.hablar("Si queréis de vuelta a Legolas para salvar su vida, debéis enfrentarme. Os estaré esperando en el bosque o en el pantano. Suerte con la elección.")
        this.#narrador.narrar("Azog y el monstruo calvo se llevaron a legolas saltando por la ventana.")
        
        Personaje.llorar(this.#gandalf)
        Personaje.llorar(this.#kili)
        Personaje.llorar(this.#fili)
        Personaje.llorar(this.#bilbo)

        this.#gandalf.coger(varitaSauco)

        this.#narrador.narrar("Gandalf, sosteniendo la varita de Saúco, lideró al grupo hacia la puerta trasera del castillo, decididos a enfrentar a Azog para salvar a Legolas.")
    }

    esc9(){
        this.cambioEscena("bosque.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("BOSQUE")
        this.#narrador.narrar("El bosque envolvía a Cerdo Agridulce en una penumbra densa cuando se encontraron con Azog y un Legolas herido, con su orgullo dañado por la pérdida de algo tan crucial como su aguda visión.")
        
        this.#azog.hablar("Legolas, puedes ir con tus amigos. La batalla es con ellos.")
        
        this.#narrador.narrar("Con esfuerzo, Legolas se unió a Cerdo Agridulce mientras Azog se preparaba para el enfrentamiento.")

        this.#gandalf.conjuroRayos(this.#azog)
        this.#kili.atacar()
        this.#fili.atacar()
        this.#bilbo.atacar()

        this.#narrador.narrar("Azog apenas muestra signos de daño.")
        this.#narrador.narrar("De repente, Azog descargó un puño devastador, enviando a Kili volando hacia una roca. Fili, desesperado, intentó despertar a su hermano, pero su cuerpo yacía inerte, aparentemente sin vida.")

        this.#fili.reanimar(this.#kili)

        this.#narrador.narrar("Legolas, furioso y afectado por la pérdida de su vista, disparó flechas una tras otra.")

        this.#legolas.dispararFlecha(this.#azog,0)

        this.#bilbo.hablar("Legolas tranquilizate por favor. Necesitamos tu puntería.")

        this.#legolas.dispararFlecha(this.#azog,1)
        this.#gandalf.conjuroHielo(this.#azog)

        this.#narrador.narrar("Aprovechando la oportunidad, Bilbo se acercó sigilosamente y golpeó al monstruo, pero su respuesta fue brutal. Azog lo agarró y le partió las piernas, arrojándolo al suelo.")

        this.#bilbo.grito("Mis piernas")

        this.#narrador.narrar("Desesperado y sin saber qué hacer, Gandalf se quedó inmóvil, sus piernas temblando.")

        this.#gandalf.hablar("Legolas, huye")

        this.#narrador.narrar("Azog, mostrando un interés peculiar en Legolas, le propuso un trato.")
        
        this.#azog.hablar("Tengo una piedra muy especial que puede salvar a tus amigos. Si me prestas tu fuerza, puedo curar a tus amigos. Pero si no lo haces, puedo hacer que volváis al punto de partida con el poder de la piedra. ¿Qué dices? ¿Me prestas tu fuerza?")
    }

    esc10(){
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("COMPLICACIONES")
        this.#narrador.narrar("En un giro trágico de los acontecimientos, Legolas, entre lágrimas y con el peso de la desesperación, se ve obligado a hacer caso a las órdenes de Azog.")

        this.#gandalf.hablar("Legolas por favor, no lo hagas. Piensa en toda la Tierra Media.")

        this.#narrador.narrar("Azog, con su malévolo ingenio, ordena a Legolas tocar la piedra. Sin más alternativas, Legolas acata la orden, y la piedra lo absorbe implacablemente. El destino de los hermanos enanos, Kili y Fili, no es diferente; la piedra los engulle sin piedad.")
        this.#narrador.narrar("La piedra comienza a brillar con una intensidad sobrecogedora. Gandalf, en un acto de valentía, protege a los demás con un hechizo mientras Azog, con fuerza titánica, lanza la piedra lejos, desencadenando una explosión devastadora.")
        this.#narrador.narrar("Azog emerge de la explosión, un testigo de la destrucción que ha desatado en el horizonte cercano. La piedra, revelando su capacidad destructiva, ha cambiado el destino de la Tierra Media para siempre.")

        this.#azog.hablar("Esta piedra es la piedra filosofal ,y con ella traerá muerte y destrucción a la Tierra Media.")

        this.#narrador.narrar("Ante la magnitud de la amenaza, Gandalf, con la varita de Saúco en la mano, se enfrenta a una decisión desgarradora. La elección de usar la varita para contrarrestar el poder de la piedra filosofal o abstenerse, consciente de las consecuencias que podrían desencadenarse, se cierne en el aire. La balanza entre la esperanza y la oscuridad pende en un hilo, mientras Gandalf se sume en un dilema crucial.")
    }

    esc11(){
        this.cambioEscena("hogwarts.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("GANDALF Y SU DESTINO")
        this.#narrador.narrar("Gandalf, sintiendo la desesperación ante la abrumadora amenaza de Azog, tomó una decisión audaz. Con el poder de la varita de Saúco, pronunció un conjuro prohibido que creó un portal a un nuevo mundo. Una brecha dimensional se abrió ante ellos, revelando un paisaje desconocido.")
        
        this.#gandalf.hablar("Bilbo, ya no hay nada más que hacer aquí. Me voy a otro mundo.")
        
        this.#narrador.narrar("Bilbo, con angustia en su voz, le suplicó que no se fuera, argumentando que lo necesitaban. Mientras hablaba, Bilbo vio cómo Azog se colaba sigilosamente en el portal, lo que añadió urgencia a la situación.")
        
        this.#bilbo.hablar("¡No te vayas, Gandalf! ¡Te necesitamos!")
        
        this.#narrador.narrar("En medio de las súplicas de Bilbo, Azog atravesó el portal, llevando consigo la amenaza a un nuevo mundo. Bilbo, alerta, informó a Gandalf sobre la presencia de Azog en el otro lado.")
        
        this.#bilbo.hablar("¡Gandalf, Azog cruzó el portal!")
        
        this.#narrador.narrar("La gravedad de la situación no se podía ignorar. El nuevo mundo estaba ahora en peligro. Con determinación, Gandalf comprendió que debía asumir la responsabilidad y enfrentarse a la maldad que ahora acechaba en ese reino distante.")
        
        this.#gandalf.hablar("Debo irme. Protegeré este nuevo mundo.")
        
        this.#narrador.narrar("Con eso, Gandalf atravesó el portal, dejando atrás la Tierra Media y fundando en el nuevo mundo la escuela mágica de Hogwarts. Sin embargo, la verdadera razón detrás de la creación de la escuela era más oscura y urgente de lo que los estudiantes imaginaban.")
        this.#narrador.narrar("En Hogwarts, los alumnos creían que estaban allí para aprender magia, y en cierto sentido, era verdad. Pero el propósito principal de Gandalf era detener la maldad del ser siniestro Azog que ahora conocían como Voldemort, aunque este nombre se pronunciara con cuidado y se ocultara entre las sombras. Cuanto menos se mencionara a Voldemort, más seguro estaría el secreto que protegía a aquellos en el nuevo mundo de una amenaza que llegó a través del portal desde la Tierra Media.")

        //Final cuento
        this.finalCuento(2)
    }

    esc12(){
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("LA TIERRA MEDIA HA SIDO ABANDONADA")

        this.#azog.rayoFilosofal(this.#gandalf)

        this.#narrador.narrar("Azog, con frialdad implacable, se volvió hacia Bilbo, cuya expresión era una mezcla de horror y desesperación. Sin clemencia, Azog remató a Bilbo, asegurando que ningún testigo quedara vivo para contar la historia.")
        this.#narrador.narrar("En ese momento sombrío, la Tierra Media quedó sumida en la oscuridad. Con la muerte de Gandalf y Bilbo, la esperanza se desvaneció. Ya no quedaba nadie para desafiar la amenaza de Azog. La tierra que una vez estuvo llena de magia y maravillas se sumió en la condena.")

        //Final cuento
        this.finalCuento(3)
    }

    esc13(){
        this.cambioEscena("pantano.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("PANTANO")
        this.#narrador.narrar("El grupo avanzó, atravesando el misterioso pantano que se extendía ante ellos. Cada paso hundía sus pies en la espesa mezcla de barro, pero persistieron en su travesía.")
        this.#narrador.narrar("Decidieron cruzar el pantano con cautela, cada uno sintiendo cómo la suciedad y el barro se adherían a sus pies. Las plantas altas y densas ocultaban el camino.")

        this.#gandalf.conjuroViento()

        this.#narrador.narrar("A medida que avanzaban, el grupo se sumió en un silencio cauteloso, conscientes de que cualquier ruido podía alertar a bestias no deseadas en el pantano. El único sonido que rompía el silencio era el croar de las ranas y el zumbido de insectos")
        this.#narrador.narrar("Después de un tiempo rodeados de la vibrante vida del pantano, divisaron a lo lejos una gran cueva. Bilbo y Fili intercambiaron miradas, convencidos de que esa cueva podría ser el escondite de Azog. Querían explorarla en busca de respuestas y confrontación. Kili, sin embargo, se negó a entrar, sintiendo un presentimiento oscuro.")
        
        this.#kili.hablar("No sé, algo no está bien aquí. No deberíamos entrar.")
        
        this.#narrador.narrar("La compañía se encontró en una encrucijada, indecisa sobre si debían aventurarse en la cueva en busca de Azog o si debían seguir adelante. El dilema los dejó en un estado de incertidumbre.")
    }

    esc14(){
        this.cambioEscena("cueva.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("CUEVA")
        if(this.#patadaGollum<1){
            this.#narrador.narrar("La entrada de la cueva impresionó al grupo con su amplitud, pero la oscuridad que reinaba en su interior les obligó a titubear antes de decidir si aventurarse. Kili, sintiendo una profunda incomodidad con espacios oscuros, optó por quedarse afuera.")
            this.#narrador.narrar("Decidieron avanzar con precaución en la oscura caverna. Sin embargo, la falta de luz los dejó desorientados hasta que Bilbo, siguiendo una pequeña luz a lo lejos, descubrió a alguien tirado en el suelo.")
            this.#narrador.narrar("Era Gollum, y su presencia en la cueva estaba marcada por sus siseantes advertencias.")
            this.#gollum.hablar("¡Lárguense, ladrones! ¡Váyanse!")
            this.#narrador.narrar("Ignorando las protestas de Gollum, el grupo, indispuesto a ser amedrentado, le dio una patada. Gollum gritaba de dolor mientras el grupo, envalentonado, abandonaba la cueva.")
            this.#patadaGollum++
        }
        else{
            this.#narrador.narrar("Al salir al pantano y perderse decidieron, con determinación, regresar a la cueva dispuestos a enfrentarse a él de nuevo.")
            this.#narrador.narrar("Al comunicarle a Kili que volverían a entrar, este se unió al grupo. Gollum, al escucharlos, empezó a huir hacia lo más profundo de la cueva, y el grupo le siguió.")
            this.#gollum.hablar("¡DEJADME!¡NO OS ACERQUÉIS A GOLLUM!")
            this.#narrador.narrar("Gollum quedó acorralado entre varios muros, y Bilbo, sintiéndose empoderado, le dio la patada más sentida de su vida.")
            this.#gollum.grito("AAAAHH")
            this.#narrador.narrar("El grupo, satisfecho, salió de la cueva.")
            this.#narrador.narrar("Antes de partir, se encontraron ante la elección de si deberían volver otra vez a la cueva y enfrentar a Gollum una vez más. La decisión pendía en el aire mientras la cueva permanecía en la oscuridad, llena de secretos y posiblemente más encuentros con el escurridizo Gollum.")
        }
    }

    esc15(){
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("BATALLA DECISIVA")
        
        if (this.#opcionConfirm){
            this.#narrador.narrar("Tras haber retrocedido Cerdo Agridulce vuelve a intentar la batalla.")
        }

        this.#narrador.narrar("Avanzaron con determinación, y allí, en la penumbra, se encontraron con Azog. La batalla estalló con una ferocidad que resonó en el aire cargado. Los miembros de Cerdo Agridulce lucharon con valentía contra el temible enemigo")
        this.#narrador.narrar("La intensidad de la pelea era palpable. Cada golpe resonaba en el aire y la tierra temblaba con la fuerza de la contienda. Sin embargo, Azog, con su imponente presencia, repartía puños poderosos que mantenían a raya a los valientes guerreros.")
        this.#narrador.narrar("A pesar de sus esfuerzos, parecía que cada avance contra Azog era apenas suficiente para hacerle daño. Azog, en su arrogancia, presumía de su poder, desafiando a quienes se atrevían a enfrentarlo.")

        this.#gandalf.atacar()

        this.#azog.hablar("¿Es eso todo lo que tenéis? ¡Insignificantes criaturas!")

        this.#azog.echarPeste()

        this.#narrador.narrar("Gandalf, observando la situación con sabiduría, comenzó a considerar una estrategia diferente. La retirada momentánea cruzó su mente como una posibilidad. Una pausa para reagruparse y replantear el enfoque podría ser la clave para superar a Azog.")
        
        this.#gandalf.hablar("Necesitamos un momento para reorganizarnos. Deberiamos retroceder, amigos.")
    }

    esc16(){
        this.cambioEscena("anillos.jpg")
        this.vaciarDivHistoria()
        this.#narrador.tituloEscena("DESTINO DE LA TIERRA MEDIA")
        this.#narrador.narrar("Gandalf, con determinación brillando en sus ojos, cargó un ataque mientras los demás mantenían a raya a Azog. La energía concentrada estalló con un resplandor deslumbrante, y el impacto fue certero. Azog, finalmente, fue derrotado.")
        this.#narrador.narrar("La varita de Saúco, agotada por el poder utilizado en el ataque, resplandecía débilmente. Gandalf, con la varita en la mano, canalizó su poder para curar a Legolas, restaurando la salud y la vitalidad al elfo herido")

        this.#gandalf.ataqueFinal()
        this.#azog.derrota()
        Enano.celebrar()

        this.#gandalf.hablar("La victoria ha sido alcanzada, pero a un alto costo.")
        this.#narrador.narrar("Con un último destello, la varita de Saúco se rompió, liberando las últimas chispas de su mágico poder. La reliquia que los había guiado y protegido se desvaneció, pero su sacrificio había sido fundamental para la victoria.")
        this.#narrador.narrar("De vuelta en la Tierra Media, el grupo se separó, cada miembro tomando su propio camino. El futuro les deparaba nuevas aventuras y peligros relacionados con un anillo del poder.")
        this.#narrador.narrar("Aunque la batalla contra Azog había llegado a su fin, los héroes sabían que el mundo estaba lleno de misterios y que nuevas historias les esperaban en el horizonte. Con el corazón lleno de valentía y la experiencia grabada en sus almas, se embarcaron en sus propios caminos, listos para enfrentar lo que el destino les tenía reservado en el futuro.")
        this.#narrador.narrar("Proxima parada… El Señor de los Anillos.")

        //Final cuento
        this.finalCuento(4)
    }

}