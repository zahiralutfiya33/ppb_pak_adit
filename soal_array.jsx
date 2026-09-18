import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function sarray() {
  // ===== Soal 1: Looping sederhana =====
  const soal1 = [];
  for (let i = 0; i <= 9; i++) {
    console.log(i);
    soal1.push(i);
  }

  // ===== Soal 2: Looping angka ganjil =====
  const soal2 = [];
  for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      soal2.push(i);
    }
  }

  // ===== Soal 3: Looping angka genap =====
  const soal3 = [];
  for (let i = 0; i <= 9; i++) {
    if (i % 2 === 0) {
      console.log(i);
      soal3.push(i);
    }
  }

  // ===== Soal 4: Mengakses elemen array =====
  let array1 = [1, 2, 3, 4, 5, 6];
  const soal4 = array1[5]; // index ke-5 -> elemen ke-6 -> 6
  console.log(soal4);

  // ===== Soal 5: Mengurutkan elemen array =====
  let array2 = [5, 2, 4, 1, 3, 5];
  array2.sort(); 
  console.log(array2);

  // ===== Soal 6: Mengeluarkan elemen array pakai for-loop =====
  let array3 = ["selamat", "kalian", "melakukan", "perulangan", "array", "dengan", "for"];
  const soal6 = [];
  for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
    soal6.push(array3[i]);
  }

  // ===== Soal 7: Mengeluarkan elemen array dengan kondisi =====
  let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const soal7 = [];
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
      console.log(array4[i]);
      soal7.push(array4[i]);
    }
  }

  // ===== Soal 8: Menggabungkan elemen jadi string =====
  let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
  const soal8 = kalimat.join(" ");
  console.log(soal8);

  // ===== Soal 9: Menambahkan elemen array =====
  var sayuran = [];
  sayuran.push("Kangkung");
  sayuran.push("Bayam");
  sayuran.push("Buncis");
  sayuran.push("Kubis");
  sayuran.push("Timun");
  sayuran.push("Seledri");
  sayuran.push("Tauge");
  console.log(sayuran);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 1 - Looping 0 s/d 9</Text>
        <Text style={styles.value}>{soal1.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 2 - Angka Ganjil (1-9)</Text>
        <Text style={styles.value}>{soal2.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 3 - Angka Genap (0-9)</Text>
        <Text style={styles.value}>{soal3.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 4 - Akses array1[5]</Text>
        <Text style={styles.value}>array1 = [{array1.join(", ")}]</Text>
        <Text style={[styles.value, { fontWeight: "700", color: "#4ade80" }]}>Hasil: {soal4}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 5 - Sort array2</Text>
        <Text style={styles.value}>Sebelum: [5, 2, 4, 1, 3, 5]</Text>
        <Text style={[styles.value, { fontWeight: "700", color: "#4ade80" }]}>
          Sesudah: [{array2.join(", ")}]
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 6 - Loop Elemen array3</Text>
        {soal6.map((item, idx) => (
          <Text key={idx} style={styles.value}>{item}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 7 - Filter Angka Genap array4</Text>
        <Text style={styles.value}>{soal7.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 8 - Join kalimat (tanpa loop)</Text>
        <Text style={[styles.value, { fontWeight: "700", color: "#60a5fa" }]}>"{soal8}"</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 9 - Push ke array sayuran</Text>
        {sayuran.map((item, idx) => (
          <Text key={idx} style={styles.value}>{idx + 1}. {item}</Text>
        ))}
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
