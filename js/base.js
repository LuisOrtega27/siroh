// --- BASE DE DATOS MUNICIPAL OFICIAL DE ESTACIONES METEOROLÓGICAS ---
const bdEstacionesMet = [
    { id: 1, codigo: "10102-A", equipo: "MINEC", parroquia: "ANTIMANO", nombres: "NAIROBI ANDREINA", apellidos: "HERNANDEZ HERNANDEZ", cedula: "20.631.591", telefonos: "0412-9956471", sector: "INDEPENDENCIA", direccion: "Barrio Punta Brava Callejon Ezequiel Zamora Bodega Jualian.", coordenadas: "E: 719293,80 N: 1157274,50", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 2, codigo: "10104-B", equipo: "MINEC", parroquia: "CARICUAO", nombres: "MARIA EDITH", apellidos: "FIGUEROA GONZALEZ", cedula: "14.604.207", telefonos: "0412-9193869", sector: "EL MANGUITO", direccion: "Sector: Urb. UD 2, Avenida Principal. Vereda bloque 20 y 21 barrio El Onoto.", coordenadas: "E: 720829,00 N: 1153601,00", estatus: "ACTIVO", modelo: "5 EN 1 LOGIA", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 3, codigo: "10107-B", equipo: "IMGRAD", parroquia: "IMGRAD", nombres: "IMGRAD", apellidos: "IMGRAD", cedula: "IMGRAD", telefonos: "IMGRAD", sector: "IMGRAD", direccion: "IMGRAD", coordenadas: "EQUIPO RETIRADO Y BAJO RESGUARDO", estatus: "EQUIPO RETIRADO Y BAJO RESGUARDO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE EQUIPO" },
    { id: 4, codigo: "10107-A", equipo: "IMGRAD", parroquia: "EL JUNQUITO", nombres: "YERUSKA YESENIA", apellidos: "FERRER FUENTES", cedula: "27.647.803", telefonos: "0412-2685339", sector: "KM14 SAQUINAS", direccion: "Urb. Iberoamericano Sector: Saguinas.", coordenadas: "E: 716114,00 N: 1160539,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE EQUIPO DEL PLUVIOMETRO POR DAÑO EN GATILLO RETENEDOR DE BATERIA Y ESTA SOSTENIDO POR CINTA" },
    { id: 5, codigo: "10108-A", equipo: "MINEC", parroquia: "EL PARAISO", nombres: "YUSBELKYS ARNEIDY", apellidos: "CACERES CONTRERAS", cedula: "27.753.515", telefonos: "0412-5401284", sector: "LA MONTAÑITA", direccion: "Av. Guzman Blanco Parte Alta, Mata de Caucho, COTA 905", coordenadas: "E: 727350,00 N: 1159866,00", estatus: "ACTIVO", modelo: "5 EN 1 LOGIA", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 6, codigo: "10109-A", equipo: "IMGRAD", parroquia: "EL RECREO", nombres: "PERSONAL DE PC LIBERTADOR", apellidos: "", cedula: "", telefonos: "0412-9345480", sector: "SARRIA", direccion: "Av. Andres Bello, Transversal 5 norte", coordenadas: "E: 730706,00 N: 1162232,00", estatus: "INACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE EQUIPO DEL PLUVIOMETRO POR DAÑO EN GATILLO RETENEDOR DE BATERIA Y ESTA SOSTENIDO POR CINTA" },
    { id: 7, codigo: "10109-B", equipo: "MINEC", parroquia: "EL RECREO", nombres: "MARIA TERESA", apellidos: "RACHADEL SÁNCHEZ", cedula: "3.969.739", telefonos: "0414-3783890", sector: "LAS PALMAS", direccion: "Av. Ppal Las Palmas, Qta Ave María, Urb Las Palmas.", coordenadas: "E: 731908,00 N: 1162466,00", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 8, codigo: "10110-A", equipo: "MINEC", parroquia: "EL VALLE", nombres: "JHOANA GABRIEL", apellidos: "OLIVARES GODOY", cedula: "28.149.374", telefonos: "0416-5431106", sector: "CALLE 16", direccion: "Calle 16 bis los Jardines del Valle final calle", coordenadas: "E: 727225,00 N: 1157015,00", estatus: "INACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE CAMBIO DE EQUIPO POR FALLA DE PLUVIOMETRO" },
    { id: 9, codigo: "10110-B", equipo: "MINEC", parroquia: "IMGRAD", nombres: "IMGRAD", apellidos: "IMGRAD", cedula: "IMGRAD", telefonos: "IMGRAD", sector: "IMGRAD", direccion: "EQUIPO RETIRADO Y BAJO RESGUARDO", coordenadas: "EQUIPO RESGUARDADO EN IMGRAD", estatus: "EQUIPO RETIRADO Y BAJO RESGUARDO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "INOPERATIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "EQUIPO RESGUARDADO EN IMGRAD" },
    { id: 10, codigo: "10110-C", equipo: "MINEC", parroquia: "EL VALLE", nombres: "LORENZO ANTONIO", apellidos: "URBAEZ VELASQUEZ", cedula: "12.763.411", telefonos: "0412-9815196", sector: "RAVELL", direccion: "CALLE ALI PRIMERA, URBANIZACION ALBERTO RAVELL, CUERPO DE APOYO RAVELL", coordenadas: "E: 725887,00 N: 1158777,00", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 11, codigo: "15131-A", equipo: "IMGRAD", parroquia: "FIGUEROA - MIRANDA", nombres: "KARENT HAISMERY", apellidos: "PÉREZ DE AROCHA", cedula: "22.666.494", telefonos: "0424-2865027", sector: "FIGUEROA", direccion: "Santa Cruz de Figueroa, Municipio Los Salias}", coordenadas: "E:724094,00 N: 1151332,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE BATERIA" },
    { id: 12, codigo: "15131-B", equipo: "MINEC", parroquia: "MINEC", nombres: "MINEC", apellidos: "MINEC", cedula: "MINEC", telefonos: "MINEC", sector: "MINEC", direccion: "ENTREGADO A MINEC - UTEC CARACAS", coordenadas: "PLUVIOMETRO DAÑADO Y ENTREGADO EL EQUIPO UTEC CARACAS - MINEC", estatus: "ENTREGADO A MINEC - UTEC CARACAS", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "PLUVIOMETRO DAÑADO Y ENTREGADO EL EQUIPO UTEC CARACAS - MINEC" },
    { id: 13, codigo: "10111-A", equipo: "MINEC", parroquia: "LA PASTORA", nombres: "JOSÉ MANUEL", apellidos: "PEDROZA BARRIOS", cedula: "6.433.577", telefonos: "0416-8291468", sector: "LA TOMA", direccion: "Calle los De Tanque a Toma, Casa Nº 0319.", coordenadas: "E: 727656,00 N: 1164181,00", estatus: "ACTIVO", modelo: "5 EN 1 LOGIA", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 14, codigo: "10112-A", equipo: "IMGRAD", parroquia: "LA VEGA", nombres: "DINORA MARLENE", apellidos: "CASTELLANOS DÍAZ", cedula: "13.872.081", telefonos: "0424-1017525", sector: "LA PRADERA", direccion: "Sector: La Pradera, vía Las Casitas calle principal. Comunidad Monte Carmelo", coordenadas: "E: 724241,00 N: 1155524,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE BATERIA" },
    { id: 15, codigo: "10112-C", equipo: "MINEC", parroquia: "LA VEGA", nombres: "GRECIA ANGIL", apellidos: "COLMENARES SOTO", cedula: "28.100.645", telefonos: "0424-1277846", sector: "EL PETROLEO", direccion: "Sector el Petroleo callejon frente de la cancha deportiva", coordenadas: "E: 724248,00 N: 1157579,00", estatus: "INACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE CAMBIO DE EQUIPO POR FALLA DE PLUVIOMETRO" },
    { id: 16, codigo: "10113-A", equipo: "IMGRAD", parroquia: "MACARAO", nombres: "JESÚS DANIEL", apellidos: "TORRES VALDEZ", cedula: "16.007.907", telefonos: "0424-1946367", sector: "PARC. LA FE", direccion: "Sector: Parcelamiento la fe, Estacion de Bomberos de Macarao", coordenadas: "E: 716687,00 N: 1153259,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE BATERIA" },
    { id: 17, codigo: "10113-B", equipo: "MINEC", parroquia: "MACARAO", nombres: "JASMIN", apellidos: "GARCIA", cedula: "19.453.385", telefonos: "0424-2224632", sector: "LOS ANGELINOS", direccion: "Sector: Casco Historico de Macarao Calle Esquina el Rosario", coordenadas: "E: 715014,00 N: 1152953,00", estatus: "RETIRO DE EQUIPO", modelo: "5 EN 1 LOGIA", panel: "INOPERATIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "INOPERATIVO", barometro: "ACTIVO", observacion: "EL PING DE CARGA DEL PANEL SE ENCUENTRA DAÑADO Y LA VELETA DEL ANENOMETRO SE ROMPIO" },
    { id: 18, codigo: "10114-A", equipo: "MINEC", parroquia: "SAN AGUSTIN", nombres: "JOSHWUAR ANTONIO", apellidos: "ALVARADO MAGALLANES", cedula: "19.736.286", telefonos: "0424-2649929", sector: "ESTE 12 BIS", direccion: "La Ceiba, Avenida Leonardo Ruiz Pineda. Pasaje 12 diagonal al mercal", coordenadas: "E: 729215,00 N: 1160823,00", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 19, codigo: "10115-A", equipo: "MINEC", parroquia: "SAN BERNARDINO", nombres: "RICHARD JHONSON", apellidos: "RPREDA RIOS", cedula: "13.140.555", telefonos: "0424-1711843", sector: "EL BAMBÚ", direccion: "Urb. San Bernardino Con Av. Cristobal Rojas A dos cuadras de Crema Paraiso.", coordenadas: "E: 729351,00 N: 1163854,00", estatus: "RETIRO DE EQUIPO", modelo: "5 EN 1 LOGIA", panel: "INOPERATIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 20, codigo: "10116-A", equipo: "MINEC", parroquia: "SAN JOSÉ", nombres: "JESÚS DANEL", apellidos: "MORALES HERNÁNDEZ", cedula: "11.667.538", telefonos: "0424-1892321", sector: "LA MATICAS", direccion: "Calle Real de Cotiza, Entrada Jose Gregorio Hernandez", coordenadas: "E: 728846,00 N: 1163352,00", estatus: "INACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE CAMBIO DE EQUIPO POR FALLA DE PLUVIOMETRO" },
    { id: 21, codigo: "10117-A", equipo: "MINEC", parroquia: "IMGRAD", nombres: "IMGRAD", apellidos: "IMGRAD", cedula: "IMGRAD", telefonos: "IMGRAD", sector: "IMGRAD", direccion: "EQUIPO RETIRADO Y BAJO RESGUARDO", coordenadas: "PLUVIOMETRO DAÑADO Y ANENOMETRO DAÑADO", estatus: "EQUIPO RETIRADO Y BAJO RESGUARDO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "INOPERATIVO", barometro: "ACTIVO", observacion: "PLUVIOMETRO DAÑADO Y ANENOMETRO DAÑADO" },
    { id: 22, codigo: "10119-A", equipo: "MINEC", parroquia: "SANTA ROSALIA", nombres: "YELITZA DE LA CHIQUINQUIRAZAMBRANO ESCALONA", apellidos: "", cedula: "15.506.548", telefonos: "0412-5422177", sector: "LOS MANGOSS", direccion: "Los Jabillo, Transversal 7", coordenadas: "E: 728424,00 N: 1158358,00", estatus: "INACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "EL PLUVIOMETRO YA ESTA MOSTRANDO SINTOMAS DE DAÑO" },
    { id: 23, codigo: "10113-A-ST", equipo: "MINEC", parroquia: "SANTA TERESA", nombres: "PERSONAL DE GUARDIA", apellidos: "", cedula: "", telefonos: "0412-5453784", sector: "CCS3", direccion: "pasaje calzadilla 2, Detras del Laboratoria Vargas, Quinta Crespo.", coordenadas: "E: 728134,00 N: 1160726,00", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 24, codigo: "10121-A", equipo: "IMGRAD", parroquia: "SUCRE", nombres: "YANESKI", apellidos: "OSORIO", cedula: "19.710.362", telefonos: "0424-2733456", sector: "COCO FRIO", direccion: "Coco frio, barrio mario Briceño Iragorri, calle sucre sentido a Boquerón.", coordenadas: "E: 722164,00 N: 1161303,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE BATERIA" },
    { id: 25, codigo: "10121-B", equipo: "IMGRAD", parroquia: "SUCRE", nombres: "GENESIS NAYARITH", apellidos: "GARCIA GOLINDANO", cedula: "24.664.586", telefonos: "0414-2372353", sector: "NUEVO HORIZONTE", direccion: "Nuevo Horizonte De Catia, Calle Tres, entre Calle Bolivar y adyacente al Modulo Policial.", coordenadas: "E: 721704,00 N: 1162765,00", estatus: "ACTIVO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "REQUIERE CAMBIO DE BATERIA" },
    { id: 26, codigo: "10121-C", equipo: "MINEC", parroquia: "SUCRE", nombres: "JHONSON", apellidos: "ROJAS MORENO", cedula: "9.959.618", telefonos: "0414-3263129", sector: "MANGA JOBA", direccion: "Blandin en la carretera vieja Caracas - la Guaira Frente a Calle Los Olivos, Adyacente AL Modulo de Salud Pedro Gonzalez Rincones.", coordenadas: "E: 724530,00 N: 1164684,00", estatus: "ACTIVO", modelo: "5 EN 1 LA CROSSE TECHNOLOGY", panel: "ACTIVO", pluviometro: "ACTIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "ACTIVO", barometro: "ACTIVO", observacion: "REQUIERE MANTENIMIENTO Y CAMBIO DE BATERIAS" },
    { id: 27, codigo: "15131-B-BM", equipo: "IMGRAD", parroquia: "TAZON - MIRANDA", nombres: "PERSONAL DE GUARDIA PC LIBERTADOR", apellidos: "", cedula: "", telefonos: "0426-5191535", sector: "CCS4", direccion: "Campamento de proteccion civil - Tazón", coordenadas: "E: 730430,00 N: 1150191,00", estatus: "EQUIPO RETIRADO Y BAJO RESGUARDO", modelo: "LA CROSSE TECHNOLOGY SIMPLE", panel: "ACTIVO", pluviometro: "INOPERATIVO", temp_ext: "ACTIVO", temp_int: "ACTIVO", anemometro: "NO POSEE", barometro: "NO POSEE", observacion: "FUE RETIRADO" }
];

// --- MATRIZ HISTÓRICA ANUAL DESDE 2019 ---
const bdMatrizAnual = [
    { anio: 2019, datos: [0, 0, 0, 0, 0, 28, 64, 60, 42, 436, 690, 637] },
    { anio: 2020, datos: [45, 122, 0, 19, 53, 98, 436, 59, 87, 565, 94, 443.2] },
    { anio: 2021, datos: [166.5, 76.2, 8.9, 156.7, 244.5, 378.5, 536.3, 628.2, 621, 547, 721, 201.5] },
    { anio: 2022, datos: [52, 4.2, 64.2, 144, 08.1, 157.3, 677.3, 454.1, 873.9, 1007.4, 1672.2, 797.3] },
    { anio: 2023, datos: [152.6, 49.8, 14.8, 0, 118.3, 5.9, 169, 9.8, 624, 522, 0, 272] },
    { anio: 2024, datos: [762.3, 435, 58.2, 114, 82.8, 169.8, 72, 69.6, 15, 20.04, 0, 578.9] },
    { anio: 2025, datos: [414, 28.1, 114, 25.9, 1110.6, 623, 12.4, 32, 694.8, 811, 98.7, 3105.4] }
];

const mesesNombres = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
let baseLecturasSesion = [];

// --- SISTEMA DE NAVEGACIÓN SPA PRINCIPAL ---
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    document.querySelectorAll('.nav-menu > li > a').forEach(l => l.classList.remove('active'));

    document.getElementById('page-' + pageId).classList.add('active-page');
    document.getElementById('link-' + pageId).classList.add('active');

    if(pageId !== 'meteorologia') {
        document.getElementById('sub-met-list').classList.remove('active-submenu');
    }

    const title = document.getElementById('page-title');
    const desc = document.getElementById('page-desc');

    if(pageId === 'geoportal') { title.innerText = "Geoportal Hídrico Municipal"; desc.innerText = "Visor de mapas interactivo y mapas base (Capas SIG)."; }
    if(pageId === 'siroh') { title.innerText = "Módulo SIROH"; desc.innerText = "Sistema de Inspección y Registro de Obras Hidráulicas."; }
    if(pageId === 'hidrologia') { title.innerText = "Hidrología Municipal"; desc.innerText = "Inventario y caracterización macro de cuencas."; }
    if(pageId === 'morfometria') { title.innerText = "Morfometría Municipal"; desc.innerText = "Estudios de Parámetros de Forma y Relieve."; renderMorfometria(); }
}

// --- MANEJO EXCLUSIVO DEL SUBMENU DE METEOROLOGÍA ---
function toggleMeteorologiaMenu() {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    document.querySelectorAll('.nav-menu > li > a').forEach(l => l.classList.remove('active'));
    
    document.getElementById('page-meteorologia').classList.add('active-page');
    document.getElementById('link-meteorologia').classList.add('active');
    
    const sub = document.getElementById('sub-met-list');
    sub.classList.toggle('active-submenu');
    
    // Abrir por defecto la primera opción del submenú
    switchMeteorologiaSubPage('estaciones');
}

function switchMeteorologiaSubPage(subId) {
    document.getElementById('sub-met-list').classList.add('active-submenu');
    document.querySelectorAll('.submenu-meteorologia li a').forEach(sl => sl.classList.remove('active-sublink'));
    document.getElementById('sublink-' + subId).classList.add('active-sublink');

    // Esconder todas las sub-vistas de meteorología
    document.getElementById('met-subview-estaciones').style.display = 'none';
    document.getElementById('met-subview-carga').style.display = 'none';
    document.getElementById('met-subview-historico').style.display = 'none';
    document.getElementById('met-subview-anual').style.display = 'none';
    document.getElementById('met-subview-dashboard').style.display = 'none';

    // Mostrar la seleccionada
    document.getElementById('met-subview-' + subId).style.display = 'block';

    const title = document.getElementById('page-title');
    const desc = document.getElementById('page-desc');
    title.innerText = "Meteorología: Submenú " + subId.toUpperCase();

    if(subId === 'estaciones') { desc.innerText = "Catálogo de instrumentación y metadatos de la Red Pluviométrica."; renderEstacionesMet(); }
    if(subId === 'carga') { desc.innerText = "Inyección de datos pluviométricos acumulados."; renderCargaDiariaMet(); }
    if(subId === 'historico') { desc.innerText = "Estadísticas cronológicas recopiladas en la sesión."; renderHistoricoMet(); }
    if(subId === 'anual') { desc.innerText = "Historial acumulado del municipio desde 2019."; renderAnualMet(); }
    if(subId === 'dashboard') { desc.innerText = "Dashboard Analítico e indicadores de control."; renderDashboardMet(); }
}

function switchSubTab(modulo, tabId) {
    if (modulo === 'siroh') {
        document.querySelectorAll('#page-siroh .sub-content-view').forEach(v => v.classList.remove('active-sub'));
        document.querySelectorAll('#page-siroh .tab-btn').forEach(b => b.classList.remove('active-tab'));
        document.getElementById('view-' + tabId).classList.add('active-sub');
        document.getElementById('btn-' + tabId).classList.add('active-tab');
    } else if (modulo === 'morfo') {
        document.querySelectorAll('#page-morfometria .sub-content-view').forEach(v => v.classList.remove('active-sub'));
        document.querySelectorAll('#page-morfometria .tab-btn').forEach(b => b.classList.remove('active-tab'));
        document.getElementById('view-' + tabId).classList.add('active-sub');
        document.getElementById('btn-' + tabId).classList.add('active-tab');
        document.getElementById('print-area').style.display = 'none';
    }
}

// --- SUBPÁGINA A: LÓGICA DE ESTACIONES ---
function renderEstacionesMet() {
    const tabla = document.getElementById('tabla-estaciones-met');
    tabla.innerHTML = '';
    bdEstacionesMet.forEach(e => {
        let badgeClass = 'badge-activo';
        if(e.estatus.includes('RESGUARDO') || e.estatus.includes('MINEC')) badgeClass = 'badge-resguardo';
        if(e.estatus === 'INACTIVO' || e.estatus === 'RETIRO DE EQUIPO') badgeClass = 'badge-inactivo';

        tabla.innerHTML += `
            <tr>
                <td><b>${e.codigo}</b></td>
                <td>${e.equipo}</td>
                <td>${e.parroquia}</td>
                <td>${e.nombres} ${e.apellidos}</td>
                <td><span class="badge ${badgeClass}">${e.estatus}</span></td>
                <td>
                    <button class="btn btn-small" onclick="verFichaEstacion(${e.id})">Ver Ficha</button>
                    <button class="btn btn-small" style="background:var(--warning-orange);" onclick="abrirEditarEstacion(${e.id})">Editar</button>
                </td>
            </tr>
        `;
    });
}

function verFichaEstacion(id) {
    const est = bdEstacionesMet.find(e => e.id === id);
    const contenedor = document.getElementById('ficha-estacion-detalle');
    contenedor.innerHTML = `
        <h3 style="color:var(--primary-blue); font-size:15px; margin-bottom:10px;">📋 FICHA TÉCNICA DE ESTACIÓN PLUVIOMÉTRICA - CÓDIGO ${est.codigo}</h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; font-size:12px;">
            <p><b>Equipo Asignado:</b> ${est.equipo}</p>
            <p><b>Parroquia:</b> ${est.parroquia}</p>
            <p><b>Responsable:</b> ${est.nombres} ${est.apellidos}</p>
            <p><b>Cédula:</b> ${est.cedula}</p>
            <p><b>Teléfono:</b> ${est.telefonos}</p>
            <p><b>Sector:</b> ${est.sector}</p>
            <p><b>Coordenadas UTM:</b> ${est.coordenadas}</p>
            <p><b>Marca/Modelo:</b> ${est.modelo}</p>
        </div>
        <div style="margin-top:10px; border-top:1px dashed var(--border-muted); padding-top:8px; font-size:11.5px;">
            <p><b>MATRIZ DE SENSORES INTERNOS:</b></p>
            <p>Panel: ${est.panel} | Pluviómetro: ${est.pluviometro} | Sensor Temp. Ext: ${est.temp_ext} | Sensor Temp. Int: ${est.temp_int} | Anemómetro: ${est.anemometro} | Barómetro: ${est.barometro}</p>
            <p style="margin-top:5px; color:var(--alert-red);"><b>Observación Técnica:</b> ${est.observacion}</p>
        </div>
        <button class="btn btn-small" style="margin-top:10px; background:#64748b;" onclick="document.getElementById('ficha-estacion-detalle').style.display='none'">Cerrar Ficha</button>
    `;
    contenedor.style.display = 'block';
    contenedor.scrollIntoView({ behavior: 'smooth' });
}

function abrirEditarEstacion(id) {
    const est = bdEstacionesMet.find(e => e.id === id);
    document.getElementById('edit-est-id').value = est.id;
    document.getElementById('edit-est-sector').value = est.sector;
    document.getElementById('edit-est-direccion').value = est.direccion;
    document.getElementById('edit-est-estatus').value = est.estatus;
    document.getElementById('edit-est-observacion').value = est.observacion;

    document.getElementById('form-edicion-estacion-box').style.display = 'block';
    document.getElementById('form-edicion-estacion-box').scrollIntoView({ behavior: 'smooth' });
}

function guardarEdicionEstacion(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('edit-est-id').value);
    const index = bdEstacionesMet.findIndex(est => est.id === id);

    bdEstacionesMet[index].sector = document.getElementById('edit-est-sector').value;
    bdEstacionesMet[index].direccion = document.getElementById('edit-est-direccion').value;
    bdEstacionesMet[index].estatus = document.getElementById('edit-est-estatus').value;
    bdEstacionesMet[index].observacion = document.getElementById('edit-est-observacion').value;

    alert("Metadatos de la estación actualizados correctamente en memoria.");
    document.getElementById('form-edicion-estacion-box').style.display = 'none';
    renderEstacionesMet();
}

// --- SUBPÁGINA B: LÓGICA DE CARGA DIARIA ---
function renderCargaDiariaMet() {
    const tabla = document.getElementById('tabla-carga-lecturas-cuerpo');
    tabla.innerHTML = '';
    document.getElementById('carga-lectura-fecha').value = new Date().toISOString().split('T')[0];

    bdEstacionesMet.forEach(e => {
        const deshabilitado = e.estatus !== "ACTIVO" ? "disabled placeholder='INOPERATIVO'" : "";
        tabla.innerHTML += `
            <tr>
                <td><b>${e.codigo}</b></td>
                <td><small>${e.parroquia} - Sector: ${e.sector} (${e.nombres})</small></td>
                <td><input type="number" step="0.1" class="input-lectura-dinamica" data-codigo="${e.codigo}" data-parroquia="${e.parroquia}" min="0" value="0" style="width:100%; padding:4px;" ${deshabilitado}></td>
            </tr>
        `;
    });
}

function procesarCargaLecturas(e) {
    e.preventDefault();
    const fecha = document.getElementById('carga-lectura-fecha').value;
    const inputs = document.querySelectorAll('.input-lectura-dinamica');
    let totalInyectados = 0;

    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor) && valor > 0) {
            baseLecturasSesion.push({
                fecha: fecha,
                codigo: input.getAttribute('data-codigo'),
                parroquia: input.getAttribute('data-parroquia'),
                valor: valor
            });
            totalInyectados++;
        }
    });

    alert(`Procesamiento Exitoso: Se han inyectado ${totalInyectados} nuevas lecturas pluviométricas al SIGHIL.`);
    switchMeteorologiaSubPage('dashboard');
}

// --- SUBPÁGINA C: LÓGICA HISTÓRICA ---
function renderHistoricoMet() {
    const tabla = document.getElementById('tabla-historico-lecturas');
    if(baseLecturasSesion.length === 0) {
        tabla.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#64748b;">No se han inyectado lecturas en la sesión actual. Use el menú de Carga.</td></tr>`;
        return;
    }
    tabla.innerHTML = '';
    baseLecturasSesion.forEach(l => {
        tabla.innerHTML += `
            <tr>
                <td>${l.fecha}</td>
                <td><b>${l.codigo}</b></td>
                <td>${l.parroquia}</td>
                <td style="color:var(--secondary-blue); font-weight:bold;">${l.valor} mm</td>
            </tr>
        `;
    });
}

// --- SUBPÁGINA D: MATRIZ ANUAL DESDE 2019 ---
function renderAnualMet() {
    const tabla = document.getElementById('tabla-matriz-anual-cuerpo');
    tabla.innerHTML = '';
    bdMatrizAnual.forEach(m => {
        let filasMeses = '';
        m.datos.forEach(d => {
            filasMeses += `<td>${d}</td>`;
        });
        tabla.innerHTML += `
            <tr>
                <td style="background:var(--light-blue); font-weight:bold; color:var(--primary-blue);">${m.anio}</td>
                ${filasMeses}
            </tr>
        `;
    });
}

// --- SUBPÁGINA E: DASHBOARD ---
function renderDashboardMet() {
    const totalEquipos = bdEstacionesMet.length;
    const activosEquipos = bdEstacionesMet.filter(e => e.estatus === "ACTIVO").length;
    
    let picoLluvia = 0;
    let distribuciónHTML = '';

    document.getElementById('dash-kpi-total').innerText = totalEquipos + " Estaciones";
    document.getElementById('dash-kpi-activos').innerText = activosEquipos + " Activos";

    if(baseLecturasSesion.length > 0) {
        baseLecturasSesion.forEach(l => {
            if(l.valor > picoLluvia) picoLluvia = l.valor;
        });

        // Agrupar lecturas por parroquia para la gráfica de barras simulada
        const agrupado = {};
        baseLecturasSesion.forEach(l => {
            agrupado[l.parroquia] = (agrupado[l.parroquia] || 0) + l.valor;
        });

        distribuciónHTML = `<span style="color:#10b981; font-weight:bold;">// DISTRIBUCIÓN DE LLUVIAS ACUMULADAS EN LA SESIÓN</span><br><br>`;
        for (const [parroquia, total] of Object.entries(agrupado)) {
            const barras = "■".repeat(Math.min(Math.round(total / 2), 30));
            distribuciónHTML += `[${parroquia}] ${barras} ${total.toFixed(1)} mm<br>`;
        }
        document.getElementById('dash-grafico-simulado').innerHTML = distribuciónHTML;
    } else {
        document.getElementById('dash-grafico-simulado').innerHTML = `No hay datos cargados hoy en el módulo "Carga". Registre lecturas para visualizar el histograma.`;
    }

    document.getElementById('dash-kpi-pico').innerText = picoLluvia.toFixed(1) + " mm";
}

// --- LÓGICA MÓDULO 4: HIDROLOGÍA (EXPEDIENTES) ---
const cuencasData = {
    macarao: { titulo: "Subcuenca Alta Quebrada Macarao", contenido: "<b>Área de Drenaje:</b> 24.5 km² <br><b>Coeficiente de Escorrentía (C):</b> 0.45.<br><b>Vulnerabilidades:</b> Flujos de detritos y colmatación en la zona industrial baja." },
    caruata: { titulo: "Subcuenca Quebrada Caroata", contenido: "<b>Área de Drenaje:</b> 8.2 km² <br><b>Coeficiente de Escorrentía (C):</b> 0.85 (Impermeable).<br><b>Vulnerabilidades:</b> Riesgos de sobrepresión hidráulica en tramos subterráneos." },
    valle: { titulo: "Subcuenca Río El Valle Poniente", contenido: "<b>Área de Drenaje:</b> 45.1 km² <br><b>Coeficiente de Escorrentía (C):</b> 0.60.<br><b>Vulnerabilidades:</b> Socavación en estribos de muros de protección marginal." }
};

function verCuenca(clave) {
    document.getElementById('c-nombre').innerText = cuencasData[clave].titulo;
    document.getElementById('c-contenido').innerHTML = cuencasData[clave].contenido;
}

// --- LÓGICA MÓDULO 5: MORFOMETRÍA ---
if (!localStorage.getItem('banco_morfometria')) {
    localStorage.setItem('banco_morfometria', JSON.stringify([
        {id: 1, nombre: "Quebrada Macarao", area: 15.4, perimetro: 22.1, longitud: 8.5, cmax: 1400, cmin: 920, kc: 1.58, pendiente: 5.6}
    ]));
}

function renderMorfometria() {
    const datos = JSON.parse(localStorage.getItem('banco_morfometria'));
    const tabla = document.getElementById('tabla-morfometria-cuerpo');
    tabla.innerHTML = '';
    datos.forEach(d => {
        tabla.innerHTML += `<tr><td><b>${d.nombre}</b></td><td>${d.area} km²</td><td>${d.kc}</td><td>${d.pendiente}%</td><td><button class="btn btn-small" onclick="cargarEditarMorfo(${d.id})">Editar</button><button class="btn btn-small" style="background:#64748b;" onclick="imprimirFicha(${d.id})">Imprimir</button><button class="btn btn-danger btn-small" onclick="eliminarMorfometria(${d.id})">Borrar</button></td></tr>`;
    });
}

function guardarMorfometria(e) {
    e.preventDefault();
    const datos = JSON.parse(localStorage.getItem('banco_morfometria'));
    const id = document.getElementById('morfo-id').value;
    const nombre = document.getElementById('mo-nombre').value;
    const area = parseFloat(document.getElementById('mo-area').value);
    const perimetro = parseFloat(document.getElementById('mo-perimetro').value);
    const longitud = parseFloat(document.getElementById('mo-long').value);
    const cmax = parseFloat(document.getElementById('mo-cmax').value);
    const cmin = parseFloat(document.getElementById('mo-cmin').value);

    const kc = (0.28 * (perimetro / Math.sqrt(area))).toFixed(2);
    const pendiente = (((cmax - cmin) / (longitud * 1000)) * 100).toFixed(2);

    if (id) {
        const idx = datos.findIndex(d => d.id == id);
        datos[idx] = { id: parseInt(id), nombre, area, perimetro, longitud, cmax, cmin, kc, pendiente };
    } else {
        datos.push({ id: Date.now(), nombre, area, perimetro, longitud, cmax, cmin, kc, pendiente });
    }
    localStorage.setItem('banco_morfometria', JSON.stringify(datos));
    document.getElementById('form-morfometria').reset();
    document.getElementById('morfo-id').value = '';
    switchSubTab('morfo', 'mo-banco');
    renderMorfometria();
}

function cargarEditarMorfo(id) {
    const datos = JSON.parse(localStorage.getItem('banco_morfometria'));
    const item = datos.find(d => d.id === id);
    document.getElementById('morfo-id').value = item.id;
    document.getElementById('mo-nombre').value = item.nombre;
    document.getElementById('mo-area').value = item.area;
    document.getElementById('mo-perimetro').value = item.perimetro;
    document.getElementById('mo-long').value = item.longitud;
    document.getElementById('mo-cmax').value = item.cmax;
    document.getElementById('mo-cmin').value = item.cmin;
    switchSubTab('morfo', 'mo-carga');
}

function eliminarMorfometria(id) {
    if(confirm("¿Eliminar este expediente?")) {
        let datos = JSON.parse(localStorage.getItem('banco_morfometria'));
        datos = datos.filter(d => d.id !== id);
        localStorage.setItem('banco_morfometria', JSON.stringify(datos));
        renderMorfometria();
    }
}

function imprimirFicha(id) {
    const datos = JSON.parse(localStorage.getItem('banco_morfometria'));
    const item = datos.find(d => d.id === id);
    const areaPrint = document.getElementById('print-area');
    areaPrint.innerHTML = `<div style="text-align:center; border-bottom:1px double #000; padding-bottom:10px; margin-bottom:15px;"><h3>SIGHIL - FICHA MORFOMÉTRICA DEL IMGRAD</h3></div><p><b>ID REGISTRO:</b> MORFO-${item.id}</p><p><b>CUERPO DE AGUA EVALUADO:</b> ${item.nombre.toUpperCase()}</p><p>--------------------------------------------------</p><p><b>Área de la Cuenca (A):</b> ${item.area} km²</p><p><b>Perímetro Colector (P):</b> ${item.perimetro} km</p><p><b>Longitud del Cauce (L):</b> ${item.longitud} km</p><p>--------------------------------------------------</p><p><b>Índice de Gravelius (Kc):</b> ${item.kc}</p><p><b>Pendiente Media del Cauce:</b> ${item.pendiente}%</p><br><button class="btn btn-small" style="background:#000;" onclick="window.print()">Imprimir Reporte</button>`;
    areaPrint.style.display = 'block';
}