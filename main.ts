basic.forever(function () {
    // Statt die Sensorwerte permanent auszulesen, werden sie
    // jede Sekunde abgefragt. Doch warum werden nicht einfach 1000 Millisekunden gewählt? Das liegt daran, dass das ausgeführte Programm eine Latenz/Verzögerung hat. Die Laufzeit des Minis ist eine Uhr die immer exakt fortläuft: Machen wir mal eine kurze Rechnung und sagen, dass der Programmcode 150 Millisekunden braucht, um von oben nach unten ausgeführt zu werden:
    // Beim ersten Durchlauf, gehen wir von keiner Latenz aus bis die Pause erreicht wird:
    // 
    // Erster Durchlauf:
    // Rest aus 0 / 1000 = ungültig, da 0 nicht geteilt werden kann, allerdings wird der Block ausgeführt:
    // 1000 ms Pause
    // 1000 + 1500 = 1500 ms Gesamtzeit des Programms
    // Zweiter Durchlauf
    // Rest aus 1150 / 1000 = 150 ms
    // 1000 - 150 = 850 ms Pause
    // 850 + 150 = 1000 ms Gesamtzeit des Programms
    // Dritter Durchlauf: 
    // 1150 + 1000 =  2150 ms Laufzeit
    // Rest aus 2150 / 1000 = 150 ms
    // 1000 - 150 = 850 ms
    // 850 + 150 = 1000 ms Gesamtzeit des Programms
    // usw...
    basic.pause(1000 - control.millis() % 1000)
    // Mit "verbinde" werden zwei Zeichenketten zu einer zusammengeführt. So können wir im seriellen Monitor besser die Werte den Sensoren zuordnen. Da die seriellen Werte aufgezeichnet werden, helfen zusätzliche Symbole, wie ein Semikolon ";", um die Wertepaare mehrerer Sensoren später in der Auswertung auseinanderzuhalten und zuzuordnen. 
    // 
    serial.writeLine("CO2:" + SCD30.readCO2() + ("; Temperatur:" + SCD30.readTemperature()) + ("; Luftfeuchtigkeit:" + SCD30.readHumidity()))
})
