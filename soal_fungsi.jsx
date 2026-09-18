import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function sfungsi() {
  // ===== Contoh 1: Function sederhana tanpa return =====
  function tampilkan() {
    console.log("halo!");
  }
  tampilkan();
  const contoh1 = "halo!"; 

  // ===== Contoh 2: Function sederhana dengan return =====
  function munculkanAngkaDua() {
    return 2;
  }
  var tampung2 = munculkanAngkaDua();
  console.log(tampung2);

  // ===== Contoh 3: Function dengan parameter =====
  function kalikanDua(angka) {
    return angka * 2;
  }
  var tampung3 = kalikanDua(2);
  console.log(tampung3);

  // ===== Contoh 4: Pengiriman parameter lebih dari satu =====
  function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua;
  }
  const contoh4 = tampilkanAngka(5, 3);
  console.log(contoh4);

  // ===== Contoh 5: Inisialisasi parameter dengan nilai default =====
  function tampilkanAngkaDefault(angka = 1) {
    return angka;
  }
  const contoh5a = tampilkanAngkaDefault(5); // 5, sesuai parameter yang dikirim
  const contoh5b = tampilkanAngkaDefault(); // 1, karena default parameter adalah 1
  console.log(contoh5a); // 5
  console.log(contoh5b); // 1

  // ===== Contoh 6: Function dengan Conditional =====
  function tampilAngka(angkaPertama, angkaKedua) {
    var hasil = angkaPertama + angkaKedua;
    if (hasil > 10) {
      return "hasil lebih besar dari 10";
    } else if (hasil > 0 && hasil < 10) {
      return "hasil lebih kecil dari 10";
    } else if (hasil === 0) {
      return "hasil 0";
    } else {
      return "Tidak ada nilai dari parameter";
    }
  }
  const contoh6 = tampilAngka(5, 10);
  console.log(contoh6);

  // ===== Contoh 7: Function dengan Looping di dalamnya =====
  const contoh7 = [];
  function looping(iteration) {
    for (var i = 0; i < iteration; i++) {
      console.log(i);
      contoh7.push(i);
    }
  }
  looping(2);

  // ===== Contoh 8: Anonymous Function =====
  var fungsiPerkalian = function (angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua;
  };
  const contoh8 = fungsiPerkalian(2, 4);
  console.log(contoh8);

  // ===== Contoh 9: Default Parameters =====
  function multiply(a, b = 1) {
    return a * b;
  }
  const contoh9a = multiply(5, 2); 
  const contoh9b = multiply(5); 
  console.log(contoh9a);
  console.log(contoh9b);

  // ===== Contoh 10: Rest Parameters (ES6) =====
  // Contoh pertama: filter nilai yang punya property .text
  const filter = (...rest) => {
    return rest.filter((el) => el.text !== undefined);
  };
  const hasilFilter = filter(1, { text: "wonderful" }, "next");
  console.log(hasilFilter); // [{ text: "wonderful" }]

  // Contoh kedua: gabungkan nama depan & belakang pakai rest + destructuring
  const fullName = (...rest) => {
    let [firstName, lastName] = rest;
    return `${firstName} ${lastName}`;
  };
  const contoh10b = fullName("John", "Doe");
  console.log(contoh10b); // John Doe

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 1 - Function Tanpa Return</Text>
        <Text style={styles.value}>Console: {contoh1}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 2 - Function Dengan Return</Text>
        <Text style={styles.value}>Hasil: {tampung2}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 3 - Function Dengan Parameter</Text>
        <Text style={styles.value}>kalikanDua(2) = {tampung3}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 4 - Parameter Lebih dari Satu</Text>
        <Text style={styles.value}>tampilkanAngka(5, 3) = {contoh4}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 5 - Default Parameter</Text>
        <Text style={styles.value}>tampilkanAngkaDefault(5) = {contoh5a}</Text>
        <Text style={styles.value}>tampilkanAngkaDefault() = {contoh5b}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 6 - Function dengan Conditional</Text>
        <Text style={styles.value}>tampilAngka(5, 10) = "{contoh6}"</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 7 - Function dengan Looping</Text>
        <Text style={styles.value}>looping(2) mencetak: {contoh7.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 8 - Anonymous Function</Text>
        <Text style={styles.value}>fungsiPerkalian(2, 4) = {contoh8}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 9 - Default Parameters (multiply)</Text>
        <Text style={styles.value}>multiply(5, 2) = {contoh9a}</Text>
        <Text style={styles.value}>multiply(5) = {contoh9b}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contoh 10 - Rest Parameters</Text>
        <Text style={styles.value}>
          filter(1, {"{text: 'wonderful'}"}, "next") ={"\n"}
          {JSON.stringify(hasilFilter)}
        </Text>
        <Text style={styles.value}>fullName("John", "Doe") = {contoh10b}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#38bdf8",
  },
  label: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  value: {
    color: "#e2e8f0",
    fontSize: 14,
    marginBottom: 2,
  },
});
