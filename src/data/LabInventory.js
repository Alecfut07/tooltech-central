import { MicroscopioOpticoImages } from "../images/LabInventory/Products/MicroscopioOptico/MicroscopioOptico";
import { BalanzaAnaliticaImages } from "../images/LabInventory/Products/BalanzaAnalitica/BalanzaAnalitica";
import { AgitadorMagneticoImages } from "../images/LabInventory/Products/AgitadorMagnetico/AgitadorMagnetico";
import { CentrifugaMesaImages } from "../images/LabInventory/Products/CentrifugaMesa/CentrifugaMesa";
import { AutoClaveImages } from "../images/LabInventory/Products/AutoClave/AutoClave";
import { EspectrofotometroImages } from "../images/LabInventory/Products/Espectrofotometro/Espectrofotometro";
import { TermocicladorPCRImages } from "../images/LabInventory/Products/TermocicladorPCR/TermocicladorPCR";
import { MicropipetaImages } from "../images/LabInventory/Products/Micropipeta/Micropipeta";
import { BathMariaImages } from "../images/LabInventory/Products/BathMaria/BathMaria";
import { MicrocentrifugaImages } from "../images/LabInventory/Products/Microcentrifuga/Microcentrifuga";
import { CampanaExtraccionImages } from "../images/LabInventory/Products/CampanaExtraccion/CampanaExtraccion";
import { DestiladorAguaImages } from "../images/LabInventory/Products/DestiladorAgua/DestiladorAgua";
import { MicroscopioElectronicoImages } from "../images/LabInventory/Products/MicroscopioElectronico/MicroscopioElectronico";
import { CamaraCultivoImages } from "../images/LabInventory/Products/CamaraCultivo/CamaraCultivo";
import { LiofilizadoraImages } from "../images/LabInventory/Products/Liofilizadora/Liofilizadora";
import { MicrocentrifugaRefrigeradaImages } from "../images/LabInventory/Products/MicrocentrifugaRefrigerada/MicrocentrifugaRefrigerada";
import { HornoSecadoImages } from "../images/LabInventory/Products/HornoSecado/HornoSecado";
import { TermometroDigitalImages } from "../images/LabInventory/Products/TermometroDigital/TermometroDigital";
import { IncubadoraImages } from "../images/LabInventory/Products/Incubadora/Incubadora";
import { MicroscopioFluorescenciaImages } from "../images/LabInventory/Products/MicroscopioFluorescencia/MicroscopioFluorescencia";
import { PlacaCalefactoraImages } from "../images/LabInventory/Products/PlacaCalefactora/PlacaCalefactora";
import { PhmetroImages } from "../images/LabInventory/Products/Phmetro/Phmetro";
import { CabinaPCRImages } from "../images/LabInventory/Products/CabinaPCR/CabinaPCR";
import { MicroscopioContrasteFasesImages } from "../images/LabInventory/Products/MicroscopioContrasteFases/MicroscopioContrasteFases";
import { BathAgitacionImages } from "../images/LabInventory/Products/BathAgitacion/BathAgitacion";
import { BathUltraSonicoImages } from "../images/LabInventory/Products/BathUltraSonico/BathUltraSonico";
import { MicroscopioCampoOscuroImages } from "../images/LabInventory/Products/MicroscopioCampoOsucro/MicroscopioCampoOscuro";
import { CentrifugaAltaCapacidadImages } from "../images/LabInventory/Products/CentrifugaAltaCapacidad/CentrifugaAltaCapacidad";
import { CamaraPCRImages } from "../images/LabInventory/Products/CamaraPCR/CamaraPCR";
import { AnalizadorEspectroImages } from "../images/LabInventory/Products/AnalizadorEspectro/AnalizadorEspectro";

export const TABLE_HEAD = [
  "Producto",
  "Descripción",
  "Precio",
  "Estado",
  "Agregar al carrito",
];

export const LabProducts = [
  {
    id: 31,
    images: [...MicroscopioOpticoImages],
    name: "Microscopio óptico",
    description: "Microscopio de alta calidad con aumento de hasta 1000x",
    price: "5,000",
    status: "disponible",
    quantity: 0, // Inicialmente no está en el carrito.
    inCart: false, // Indica si está en el carrito o no.
    subtotal: 0, // Costo total basado en precio y cantidad en el carrito.
  },
  {
    id: 32,
    images: [...BalanzaAnaliticaImages],
    name: "Balanza analítica",
    description: "Precisa y sensible balanza para mediciones de laboratorio.",
    price: "8,500",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 33,
    images: [...AgitadorMagneticoImages],
    name: "Agitador magnético",
    description: "Equipo para agitar líquidos en recipientes de laboratorio.",
    price: "2,200",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 34,
    images: [...CentrifugaMesaImages],
    name: "Centrífuga de mesa",
    description: "Centrífuga compacta para separación de muestras biológicas.",
    price: "7,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 35,
    images: [...AutoClaveImages],
    name: "Autoclave",
    description:
      "Esterilizador a vapor para equipos y materiales de laboratorio.",
    price: "15,000",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 36,
    images: [...EspectrofotometroImages],
    name: "Espectrofotómetro",
    description:
      "Instrumento para medir la absorbancia y transmitancia de muestras líquidas.",
    price: "12,500",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 37,
    images: [...TermocicladorPCRImages],
    name: "Termociclador PCR",
    description:
      "Equipo para realizar la reacción en cadena de la polimerasa (PCR).",
    price: "20,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 38,
    images: [...MicropipetaImages],
    name: "Micropipeta",
    description:
      "Instrumento de precisión para medir volúmenes pequeños de líquidos.",
    price: "1,500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 39,
    images: [...BathMariaImages],
    name: "Baño María",
    description:
      "Equipo para calentar y mantener la temperatura de muestras líquidas.",
    price: "3,500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 40,
    images: [...MicrocentrifugaImages],
    name: "Microcentrífuga",
    description:
      "Centrífuga de alta velocidad para pequeñas muestras biológicas.",
    price: "6,500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 41,
    images: [...CampanaExtraccionImages],
    name: "Campana de extracción",
    description:
      "Sistema para proteger al usuario de vapores y gases tóxicos en el laboratorio.",
    price: "9,000",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 42,
    images: [...DestiladorAguaImages],
    name: "Destilador de agua",
    description: "Equipo para obtener agua destilada de alta pureza.",
    price: "4,800",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 43,
    images: [...MicroscopioElectronicoImages],
    name: "Microscopio electrónico",
    description:
      "Microscopio de alta resolución para observar estructuras a nivel celular.",
    price: "50,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 44,
    images: [...CamaraCultivoImages],
    name: "Cámara de cultivo",
    description:
      "Recipiente para el crecimiento y mantenimiento de cultivos celulares.",
    price: "3,200",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 45,
    images: [...LiofilizadoraImages],
    name: "Liofilizadora",
    description:
      "Equipo para la deshidratación de muestras biológicas mediante sublimación.",
    price: "25,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 46,
    images: [...MicrocentrifugaRefrigeradaImages],
    name: "Microcentrífuga refrigerada",
    description:
      "Centrífuga con control de temperatura para muestras sensibles.",
    price: "8,700",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 47,
    images: [...HornoSecadoImages],
    name: "Horno de secado",
    description: "Equipo para secar muestras a temperaturas controladas.",
    price: "6,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 48,
    images: [...TermometroDigitalImages],
    name: "Termómetro digital",
    description: "Instrumento de medición de temperatura con pantalla LCD.",
    price: "500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 49,
    images: [...IncubadoraImages],
    name: "Incubadora",
    description: "Equipo para el cultivo y mantenimiento de microorganismos.",
    price: "7,800",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 50,
    images: [...MicroscopioFluorescenciaImages],
    name: "Microscopio de fluorescencia",
    description:
      "Microscopio especializado para observar fluorescencia en muestras biológicas.",
    price: "18,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 51,
    images: [...PlacaCalefactoraImages],
    name: "Placa calefactora",
    description:
      "Superficie de calentamiento para calentar matraces y recipientes en el laboratorio.",
    price: "1,200",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 52,
    images: [...PhmetroImages],
    name: "Phmetro",
    description:
      "Medidor de pH para la determinación precisa del pH de soluciones.",
    price: "2,300",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 53,
    images: [...CabinaPCRImages],
    name: "Cabina de PCR",
    description:
      "Cabina para realizar PCR con condiciones de esterilidad y seguridad.",
    price: "12,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 54,
    images: [...MicroscopioContrasteFasesImages],
    name: "Microscopio de contraste de fases",
    description:
      "Microscopio para observar detalles de muestras transparentes.",
    price: "15,500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 55,
    images: [...BathAgitacionImages],
    name: "Bañomaría de agitación",
    description:
      "Baño María con función de agitación para mezclar muestras homogéneamente.",
    price: "4,500",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 56,
    images: [...BathUltraSonicoImages],
    name: "Baño ultrasónico",
    description:
      "Equipo para la limpieza de instrumentos de laboratorio mediante ultrasonidos.",
    price: "3,000",
    status: "no disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 57,
    images: [...MicroscopioCampoOscuroImages],
    name: "Microscopio de campo oscuro",
    description:
      "Ideal para observar organismos transparentes que no pueden ser vistos con un microscopio convencional.",
    price: "1,500",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 58,
    images: [...CentrifugaAltaCapacidadImages],
    name: "Centrífuga de alta capacidad",
    description:
      "Perfecta para procesar grandes volúmenes de muestras biológicas en poco tiempo.",
    price: "3,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 59,
    images: [...CamaraPCRImages],
    name: "Cámara de PCR en tiempo real",
    description:
      "Para la detección y cuantificación precisa del ADN amplificado durante la PCR en tiempo real.",
    price: "45,000",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
  {
    id: 60,
    images: [...AnalizadorEspectroImages],
    name: "Analizador de espectro UV-Vis",
    description:
      "Utilizado para determinar la concentración de compuestos químicos en solución mediante la absorción de luz ultravioleta-visible.",
    price: "13,50",
    status: "disponible",
    quantity: 0,
    inCart: false,
    subtotal: 0,
  },
];
