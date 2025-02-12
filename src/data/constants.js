import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

export const DessertIcon = ({ className }) => (
  <Icon icon="ep:dessert" className={className} />
);
export const BowlSaladIcon = ({ className }) => (
  <Icon icon="fluent:bowl-salad-20-filled" className={className} />
);
export const ColdDrinkIcon = ({ className }) => (
  <Icon icon="ep:cold-drink" className={className} />
);
export const CutOfMeatIcon = ({ className }) => (
  <Icon icon="fluent-emoji-high-contrast:cut-of-meat" className={className} />
);
export const ShareIcon = ({ className }) => (
  <Icon icon="ic:baseline-ios-share" className={className} />
);
export const ChampagnePartyAlcoholIcon = ({ className }) => (
  <Icon icon="streamline:champagne-party-alcohol" className={className} />
);
export const RestaurantIcon = ({ className }) => (
  <Icon
    icon="material-symbols:restaurant"
    className={className}
    style={{ color: "white" }}
  />
);
export const GourmetIcon = ({ className }) => (
  <Icon icon="emojione-monotone:shallow-pan-of-food" className={className} />
);
export const EntrantesIcon = ({ className }) => (
  <Icon icon="fluent:food-toast-16-filled" className={className} />
);
export const FrescosIcon = ({ className }) => (
  <Icon icon="hugeicons:organic-food" className={className} />
);
export const MarTierraIcon = ({ className }) => (
  <Icon icon="fluent:food-fish-20-regular" className={className} />
);
export const InfantilIcon = ({ className }) => (
  <Icon icon="mdi:food-outline" className={className} />
);
export const FlameIcon = ({ className }) => (
  <Icon icon="tabler:flame" className={className} />
);

DessertIcon.propTypes = { className: PropTypes.string };
BowlSaladIcon.propTypes = { className: PropTypes.string };
ColdDrinkIcon.propTypes = { className: PropTypes.string };
CutOfMeatIcon.propTypes = { className: PropTypes.string };
ShareIcon.propTypes = { className: PropTypes.string };
ChampagnePartyAlcoholIcon.propTypes = { className: PropTypes.string };
RestaurantIcon.propTypes = { className: PropTypes.string };
GourmetIcon.propTypes = { className: PropTypes.string };
EntrantesIcon.propTypes = { className: PropTypes.string };
FrescosIcon.propTypes = { className: PropTypes.string };
MarTierraIcon.propTypes = { className: PropTypes.string };
InfantilIcon.propTypes = { className: PropTypes.string };
FlameIcon.propTypes = { className: PropTypes.string };

const VIDEO_BASE_URL = "https://pub-facf2d29b893404b813ea8cd9b2515e7.r2.dev/";

const DATA = {
  gourmet: [
    {
      id: 1,
      title: "Jamón Ibérico de Bellota",
      author: "chef",
      price: "29,00€",
      description:
        "Finas lonchas cortadas a mano, sabor y elegancia en cada bocado.",
      longDescription:
        "Finas lonchas cortadas a mano, sabor y elegancia en cada bocado.",
      video: `${VIDEO_BASE_URL}JAMÓN IBERICO DE BELLOTA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}JAMÓN IBERICO DE BELLOTA_001.jpg`,
      allergens: ["almendras"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Cecina de la Casa",
      author: "chef",
      price: "16,00€",
      description:
        "Láminas de cecina curada artesanalmente, con aceite de oliva virgen extra.",
      longDescription:
        "Láminas de cecina curada artesanalmente, con aceite de oliva virgen extra.",
      video: `${VIDEO_BASE_URL}CECINA DE LA CASA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CECINA.jpeg`,
      allergens: ["almendras"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Tabla de Quesos Artesanos",
      author: "chef",
      price: "21,00€",
      description:
        "Una exclusiva selección de quesos con carácter y tradición.",
      longDescription:
        "Una exclusiva selección de quesos con carácter y tradición.",
      video: `${VIDEO_BASE_URL}TABLA DE QUESOS ARTESANOS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TABLA DE QUESOS ARTESANOS_027.jpg`,
      allergens: ["almendras", "mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Anchoas de Santoña (Doña tomasa) con Tostada, queso azul ahumado",
      author: "chef",
      price: "21,00€",
      description:
        "Delicadas anchoas, servidas con pan tostado crujiente con queso azul ahumado.",
      longDescription:
        "Delicadas anchoas, servidas con pan tostado crujiente con queso azul ahumado.",
      video: `${VIDEO_BASE_URL}ANCHOAS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ANCHOAS_024.jpg`,
      allergens: ["cereales", "pescado"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Salpicón de Mariscos con crema de ajo asado",
      author: "chef",
      price: "22,00€",
      description:
        "Un vibrante encuentro de mariscos frescos, en una sedosa crema de ajo.",
      longDescription:
        "Un vibrante encuentro de mariscos frescos, en una sedosa crema de ajo.",
      video: `${VIDEO_BASE_URL}ZAMBURIÑA A LA BRASA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ZAMBURIÑA A LA BRASA_000.jpg`,
      allergens: ["mejillones", "crustaceos"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  entrantes: [
    {
      id: 10,
      title: "Chorizo criollo a la brasa",
      author: "chef",
      price: "4,50€",
      description: "",
      longDescription: "",
      video: `${VIDEO_BASE_URL}CHORIZO CRIOLLO A LA BRASA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CHORIZO CRIOLLO A LA BRASA_026.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 11,
      title: "Morcilla criolla a la brasa",
      author: "chef",
      price: "4,50€",
      description: "",
      longDescription: "",
      video: `${VIDEO_BASE_URL}MORCILLA CRIOLLA A LA BRASA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}MORCILLA CRIOLLA A LA BRASA_048.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 1,
      title: "Croquetas de Cecina",
      author: "chef",
      price: "18,00€",
      description:
        "Crujientes por fuera, cremosas por dentro, con papada ibérica.",
      longDescription:
        "Crujientes por fuera, cremosas por dentro, con papada ibérica.",
      video: `${VIDEO_BASE_URL}CROQUETAS DE CECINA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CROQUETAS DE CECINA_019.jpg`,
      allergens: ["cereales", "mani", "ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Ensaladilla de Ventresca al Carbón",
      author: "chef",
      price: "14,00€",
      description:
        "Bonito al carbón con guindillas en vinagre, para un toque vibrante.",
      longDescription:
        "Bonito al carbón con guindillas en vinagre, para un toque vibrante.",
      video: `${VIDEO_BASE_URL}ENSALADILLA DE VENTRESCA AL CARBÓN.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ENSALADILLA DE VENTRESCA AL CARBÓN_044.jpg`,
      allergens: ["pescado", "mani", "ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 6,
      title: "Provoleta",
      author: "chef",
      price: "10,50€",
      description: "",
      longDescription: "",
      video: `${VIDEO_BASE_URL}PROVOLETA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PROVOLETA_000.jpg`,
      allergens: ["ajonjoli", "mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Torrezno de Soria en Dos Cocciones",
      author: "chef",
      price: "14,00€",
      description:
        "Crujiente y jugoso, acompañado de batata asada y mojo versión la reserva.",
      longDescription:
        "Crujiente y jugoso, acompañado de batata asada y mojo versión la reserva.",
      video: `${VIDEO_BASE_URL}TORREZNO DE SORIA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TORREZNO DE SORIA_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Patatas Bravas",
      author: "chef",
      price: "10,00€",
      description: "Nuestra salsa tradicional en una explosión de sabor.",
      longDescription: "Nuestra salsa tradicional en una explosión de sabor.",
      video: `${VIDEO_BASE_URL}PATATAS BRAVAS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PATATAS BRAVAS_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Alcachofas Confitadas",
      author: "chef",
      price: "18,00€",
      description:
        "Con carrillera de ternera y yema trufada. Un deleite gourmet.",
      longDescription:
        "Con carrillera de ternera y yema trufada. Un deleite gourmet.",
      video: `${VIDEO_BASE_URL}ALCACHOFAS CONFITADAS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ALCACHOFAS CONFITADAS_014.jpg`,
      allergens: ["ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 7,
      title: "Tortilla Cremosa - Chistorra Campeona 2022-2023",
      author: "chef",
      price: "14,00€",
      description:
        "Un suculento homenaje a los sabores tradicionales, con un toque innovador.",
      longDescription:
        "Un suculento homenaje a los sabores tradicionales, con un toque innovador.",
      video: `${VIDEO_BASE_URL}TORTILLA CREMOSA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TORTILLA CREMOSA_012.jpg`,
      allergens: ["ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 8,
      title: "Berenjena al Josper",
      author: "chef",
      price: "10,00€",
      description: "Asada al Josper con salsa napolitana y parmesano fundido.",
      longDescription:
        "Asada al Josper con salsa napolitana y parmesano fundido.",
      video: `${VIDEO_BASE_URL}BERENJENA AL JOSPER.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}BERENJENA AL JOSPER_000.jpg`,
      allergens: ["mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 9,
      title: "Pulpo a la Brasa con Salsa Barbacoa Japonesa",
      author: "chef",
      price: "24,00€",
      description:
        "Pulpo braseado, servido con batata asada y alioli de sobrasada.",
      longDescription:
        "Pulpo braseado, servido con batata asada y alioli de sobrasada.",
      video: `${VIDEO_BASE_URL}PULPO A LA BRASA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PULPO A LA BRASA_014.jpg`,
      allergens: ["mejillones", "mani", "ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  frescos: [
    {
      id: 1,
      title: "Tomate Ecológico Aliñado",
      author: "chef",
      price: "12,00€",
      description:
        "Tomate de temporada con cebolla fresca y aceite de oliva virgen extra.",
      longDescription:
        "Tomate de temporada con cebolla fresca y aceite de oliva virgen extra. Frescura y sabor auténtico.",
      video: `${VIDEO_BASE_URL}TOMATE ECOLÓGICO ALIÑADO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TOMATE ECOLÓGICO ALIÑADO_046.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Ensalada Fresca la reserva",
      author: "chef",
      price: "13,00€",
      description:
        "Mezclume fresca, Queso azul, manzana, nuez caramelizada, aceite de oliva ahumado y tomates Cherry.",
      longDescription:
        "Mezclume fresca, Queso azul, manzana, nuez caramelizada, aceite de oliva ahumado y tomates Cherry. Un placer elegante y sabroso.",
      video: `${VIDEO_BASE_URL}ENSALADA FRESCA LA RESERVA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ENSALADA FRESCA LA RESERVA_026.jpg`,
      allergens: ["almendras", "mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "César de Salmón Ahumado",
      author: "chef",
      price: "14,00€",
      description:
        "Lechuga romana con salmón ahumado y nuestra salsa casar de calamatas.",
      longDescription:
        "Lechuga romana con salmón ahumado y nuestra salsa casar de calamatas.",
      video: `${VIDEO_BASE_URL}CÉSAR DE SALMÓN.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CÉSAR DE SALMÓN_018.jpg`,
      allergens: ["pescado", "mani", "soja", "ajonjoli"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Ensalada mixta",
      author: "chef",
      price: "11,00€",
      description:
        "Ensalada Mixta: Fresca y ligera, con tomate fresco, mix de lechugas, cebolla morada.",
      longDescription: "Una ensalada simple y deliciosa.",
      video: `${VIDEO_BASE_URL}ENSALADA MIXTA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ENSALADA MIXTA_012.jpg`,
      allergens: ["soja"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  marytierra: [
    {
      id: 1,
      title: "Paella de Gamba y Mariscos",
      author: "chef",
      price: "21,00€",
      description:
        "Una deliciosa combinación de gambas y mariscos frescos, cocinados en una paella tradicional.",
      longDescription: "Precio por persona.",
      video: `${VIDEO_BASE_URL}PAELLA DEL MAR.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PAELLA DEL MAR_037.jpg`,
      allergens: ["mejillones", "crustaceos", "pescado"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 6,
      title: "Arroz negro del mar",
      author: "chef",
      price: "22,00€",
      description: "Arroz con sofrito y tinta de calamar.",
      longDescription:
        "Arroz con sofrito y tinta de calamar, aceite de oliva cocinado con gambas, anillas de pota mejillones y alcachofas",
      video: `${VIDEO_BASE_URL}ARROZ NEGRO DEL MAR.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ARROZ NEGRO DEL MAR_046.jpg`,
      allergens: ["crustaceos", "pescado"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Paella de Ternera, Papada y Alcachofas",
      author: "chef",
      price: "21,00€",
      description:
        "Un sabroso arroz con ternera, papada y alcachofas confitadas.",
      longDescription: "Una combinación rica y memorable. Precio por persona.",
      video: `${VIDEO_BASE_URL}PAELLA VALENCIANA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PAELLA VALENCIANA_022.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Chuletón de Vaca Gallega 40 dias de maduración (un kilo)",
      author: "chef",
      price: "80,00€",
      description:
        "Jugoso y tierno, a la parrilla para resaltar su sabor natural.",
      longDescription:
        "Una celebración de la buena carne, con patatas y pimientos del piquillo caramelizados.",
      video: `${VIDEO_BASE_URL}CHULETONES DE VACA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CHULETONES DE VACA_038.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Carrillera de Ternera en su Jugo",
      author: "chef",
      price: "23,00€",
      description:
        "Tierna y melosa, cocinada a fuego lento para concentrar su jugo.",
      longDescription: "Cada bocado con un sabor profundo e inigualable.",
      video: `${VIDEO_BASE_URL}CARRILLERA DE TERNERA EN SU JUGO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CARRILLERA DE TERNERA EN SU JUGO_019.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Solomillo de vaca con batata asada",
      author: "chef",
      price: "26,00€",
      description:
        "Corte jugoso y tierno, cocinado en el Josper para un sabor intenso y ahumado.",
      longDescription: "Un sabor inigualable.",
      video: `${VIDEO_BASE_URL}SOLOMILLO DE VACA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}SOLOMILLO DE VACA_022.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 7,
      title: "Hamburguesa Braseada la mijina, de vaca",
      author: "chef",
      price: "14,00€",
      description: "Carne curada a la brasa, bacon crujiente.",
      longDescription:
        "Carne curada a la brasa, bacon crujiente, queso cheddar, cebolla morada salteada, pepinillos y mayonesa secreta en suave pan de patata.",
      video: `${VIDEO_BASE_URL}BURGUER CON PATATAS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}BURGUER CON PATATAS_072.jpg`,
      allergens: ["mani", "ajonjoli", "cereales"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 8,
      title: "Lomo Bajo Trinchado",
      author: "chef",
      price: "22,00€",
      description: "Jugoso lomo bajo con patatas y pimientos del Padrón.",
      longDescription: "Un sabor auténtico.",
      video: `${VIDEO_BASE_URL}LOMO BAJO TRINCHADO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}LOMO BAJO TRINCHADO_007.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 9,
      title: "Entraña al josper",
      author: "chef",
      price: "18,00€",
      description: "",
      longDescription: "",
      video: `${VIDEO_BASE_URL}ENTRAÑA AL JOSPER.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}ENTRAÑA AL JOSPER_019.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 10,
      title: "SALMON A LA PARRILLA",
      author: "chef",
      price: "22,00€",
      description: "Jugoso y con un toque ahumado",
      longDescription:
        "Jugoso y con un toque ahumado, glaseado con nuestra salsa teriyaki casera para un equilibrio perfecto de sabores dulces y salados",
      video: `${VIDEO_BASE_URL}SALMON A LA PARRILLA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}SALMON A LA PARRILLA_001.jpg`,
      allergens: ["pescado"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 11,
      title: "Tataki de atún fresco",
      author: "chef",
      price: "28,00€",
      description: "",
      longDescription: "",
      video: `${VIDEO_BASE_URL}TATAKI DE ATÚN FRESCO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TATAKI DE ATÚN FRESCO_041.jpg`,
      allergens: ["pescado"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  infantil: [
    {
      id: 1,
      title: "Pasta Napolitana para Niños (Menú Infantil)",
      author: "chef",
      price: "14,00€",
      description:
        "Deliciosa pasta con salsa de tomate fresca al estilo napolitano.",
      longDescription: "Un plato simple y sabroso que encantará a los niños.",
      video: `${VIDEO_BASE_URL}PASTA NAPOLITANA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}PASTA NAPOLITANA_017.jpg`,
      allergens: ["ajonjoli", "cereales"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Burger con Patatas (Menú Infantil)",
      author: "chef",
      price: "Incluido en Menú (14€)",
      description:
        "Hamburguesa preparada a la perfección, acompañada de crujientes patatas fritas.",
      longDescription:
        "Ideal para nuestros pequeños exploradores culinarios. Postre: Helado.",
      video: `${VIDEO_BASE_URL}BURGUER CON PATATAS.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}BURGUER CON PATATAS_072.jpg`,
      allergens: ["mani", "cereales"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  dulces: [
    {
      id: 1,
      title: "Crepe rellena caramelo",
      author: "chef",
      price: "6,50€",
      description: "Delicioso crepe relleno de caramelo.",
      longDescription: "Delicioso crepe relleno de caramelo.",
      video: `${VIDEO_BASE_URL}CREPE RELLENA CARAMELO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}CREPE RELLENA CARAMELO_021.jpg`,
      allergens: ["ajonjoli", "cereales", "mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Tarta de Queso Manchego",
      author: "chef",
      price: "7,00€",
      description: "Al horno, suave y sabrosa.",
      longDescription: "Un postre tradicional.",
      video: `${VIDEO_BASE_URL}TARTA DE QUESO MANCHEGO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}TARTA DE QUESO MANCHEGO_007.jpg`,
      allergens: ["ajonjoli", "cereales", "almendras"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Brownie de Chocolate Belga",
      author: "chef",
      price: "7,50€",
      description: "Rico y decadente, con nueces caramelizadas.",
      longDescription: "Un placer dulce y crujiente.",
      video: `${VIDEO_BASE_URL}BROWNIE DE CHOCOLATE BELGA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}BROWNIE DE CHOCOLATE BELGA_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Helados",
      author: "chef",
      price: "6,50€",
      description: "Vainilla canela, chocolate, caramelo",
      longDescription: "Cremosos y refrescantes.",
      video: `${VIDEO_BASE_URL}HELADO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}HELADO_015.jpg`,
      allergens: ["mani"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Sorbete",
      author: "chef",
      price: "6,50€",
      description: "Limón.",
      longDescription: "Refrescante y ligero.",
      video: `${VIDEO_BASE_URL}SORBETE.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}SORBETE_013.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
  bebidas: [
    {
      id: 1,
      title: "Coctel Margarita Frozen",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL MARGARITA FROZEN.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL MARGARITA FROZEN_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Coctel michelada",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL MICHELADA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL MICHELADA_004.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Coctel mojito de fresa",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL MOJITO DE FRESA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL MOJITO DE FRESA_007.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 4,
      title: "Coctel old fashioned",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL OLD FASHIONED.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL OLD FASHIONED_021.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Coctel piña colada",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL PIÑA COLADA.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL PIÑA COLADA_014.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 6,
      title: "Coctel San Francisco",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}COCTEL SAN FRANCISCO.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}COCTEL SAN FRANCISCO_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 7,
      title: "Lover coctel",
      author: "bartender",
      price: "15,00€",
      description: "Cocteles",
      longDescription: "Cocteles",
      video: `${VIDEO_BASE_URL}LOVER COCTEL.mp4`,
      isChefSuggestion: true,
      image: `${VIDEO_BASE_URL}LOVER COCTEL_000.jpg`,
      allergens: [],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
};

export const translations = {
  es: {
    title: "MENÚ",
    seeMore: "Ver Más",
    seeLess: "Ver Menos",
    selectLanguage: "Seleccionar idioma",
    close: "Cerrar",
    list: "List",
  },
  en: {
    title: "MENU",
    seeMore: "See More",
    seeLess: "See Less",
    selectLanguage: "Select Language",
    close: "Close",
    list: "List",
  },
};

const DATA_DISCOTECA = {
  shows: [
    {
      id: 1,
      title: "Show de Botellas",
      author: "DJ",
      price: "500€",
      description:
        "Un espectáculo de luces y música con presentación de botellas.",
      longDescription:
        "Este show incluye la presentación de varias botellas con un show de luces y sonido, ideal para comenzar la noche.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA (PREMIUM).mp4`,
      isChefSuggestion: true,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 2,
      title: "Show de Botellas Premium",
      author: "DJ",
      price: "800€",
      description: "La experiencia premium con botellas premium y bailarines.",
      longDescription:
        "Un show premium que combina botellas de alta gama con una puesta en escena más elaborada.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA MOET.mp4`,
      isChefSuggestion: true,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 3,
      title: "Show de Botellas Moët",
      author: "DJ",
      price: "1200€",
      description: "Botellas Moët y un show elegante y sofisticado.",
      longDescription:
        "La elegancia del champagne Moët combinada con efectos visuales de lujo.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA (NO PREMIUN).mp4`,
      isChefSuggestion: true,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 5,
      title: "Show de Botellas Go Go Go",
      author: "DJ",
      price: "1000€",
      description: "¡Energía sin límites y bailarines go-go!",
      longDescription:
        "Este show incluye bailarines go-go y botellas presentadas de forma dinámica.",
      video: `${VIDEO_BASE_URL}SHOW GOGO.mp4`,
      isChefSuggestion: true,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
    {
      id: 6,
      title: "Show Moet",
      author: "DJ",
      price: "1500€",
      description: "La máxima expresión de lujo con Moët & Chandon.",
      longDescription:
        "Este show está dedicado completamente a Moët & Chandon, con una experiencia inigualable.",
      video: `${VIDEO_BASE_URL}SHOW MOET.mp4`,
      isChefSuggestion: true,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      isPrincipal: true,
      isHighlight: true,
    },
  ],
};
// Secciones modo restaurante
export const SECTIONS = [
  { id: "gourmet", label: "Gourmet", icon: GourmetIcon, posts: DATA.gourmet },
  {
    id: "entrantes",
    label: "Entrantes",
    icon: EntrantesIcon,
    posts: DATA.entrantes,
  },
  { id: "frescos", label: "Frescos", icon: FrescosIcon, posts: DATA.frescos },
  {
    id: "marytierra",
    label: "Mar y Tierra",
    icon: MarTierraIcon,
    posts: DATA.marytierra,
  },
  {
    id: "infantil",
    label: "Menú Infantil",
    icon: InfantilIcon,
    posts: DATA.infantil,
  },
  { id: "dulces", label: "Dulces", icon: DessertIcon, posts: DATA.dulces },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: ColdDrinkIcon,
    posts: DATA.bebidas,
  },
];

// Secciones modo discoteca
export const SECTIONS_DISCOTECA = [
  {
    id: "shows",
    label: "Shows",
    icon: FlameIcon,
    posts: DATA_DISCOTECA.shows,
  },
];
