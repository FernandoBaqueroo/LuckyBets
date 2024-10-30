# 🎲 **Lucky Bets!** 🎲

¡Bienvenido a **Lucky Bets!**, un emocionante juego de dados para dos jugadores. Compite para alcanzar una puntuación de 100 y demuestra quién es el rey de los dados. ¡Que comience la diversión!

## 🌟 **Objetivo del Juego**

El objetivo del juego es ser el primer jugador en alcanzar una puntuación total de **100 puntos**. Los jugadores se turnan para lanzar un dado y sumar su puntuación actual. ¡Pero ten cuidado con el **1**! Lanzar un **1** hará que pierdas tu puntuación acumulada en ese turno.

---

## 🔄 **Cómo Jugar**

1. **Iniciar el Juego**: Haz clic en el botón **New Game** para comenzar.
2. **Lanzar el Dado**: Haz clic en el botón **Roll Dice** para lanzar el dado.
   - Si obtienes un número entre **2 y 6**, suma ese número a tu puntuación acumulada.
   - Si lanzas un **1**, perderás tu puntuación acumulada y cambiarás de jugador.
3. **Mantener Puntuación**: Haz clic en **Hold** para sumar tu puntuación acumulada a tu puntuación total. Luego cambiarás de jugador.
4. **Ganar el Juego**: ¡El primer jugador en alcanzar o superar **100 puntos** gana!

---

## 🎮 **Componentes del Juego**

- **Contenedores de Jugador**:
  - **Jugador 1**: 
    - Puntuación Total: `score_p1`
    - Puntuación Actual: `previous_score_p1`
  - **Jugador 2**: 
    - Puntuación Total: `score_p2`
    - Puntuación Actual: `previous_score_p2`

- **Controles del Juego**:
  - **New Game**: Reinicia el juego.
  - **Roll Dice**: Lanza el dado.
  - **Hold**: Mantiene la puntuación acumulada.

- **Imagen del Dado**: Se muestra la imagen del dado correspondiente al resultado del lanzamiento.

---

## 🌈 **Visuales del Juego**

- **Colores**: Utilizamos un hermoso fondo de gradiente de **rojo a morado**.
- **Efectos de Opacidad**: El contenedor del jugador activo tiene una opacidad del **65%**, mientras que el del jugador inactivo tiene una opacidad del **35%**. Esto proporciona una clara indicación de quién está jugando.

---

## ⚙️ **Código**

El juego está implementado con JavaScript y Tailwind CSS. Aquí hay una breve descripción de algunas funciones clave:

- **`generateRollDice()`**: Genera un número aleatorio del 1 al 6.
- **`displayScore()`**: Actualiza la visualización de las puntuaciones en la pantalla.
- **`switchPlayer()`**: Cambia el turno entre los jugadores y restablece la puntuación acumulada.
- **`resetGame()`**: Reinicia todas las puntuaciones y vuelve al estado inicial del juego.

---

## 🎉 **¡Disfruta Jugando!**

¡Buena suerte y que gane el mejor jugador! 🎉 Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
