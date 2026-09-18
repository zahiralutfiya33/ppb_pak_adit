import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function sperulangan() {
  // ===== Soal 1: Antrean Pengunjung Loket Tiket Bioskop =====
  const soal1 = [];
  for (let i = 1; i <= 8; i++) {
    const teks = `Tiket antrean nomor: ${i}`;
    console.log(teks);
    soal1.push(teks);
  }

  // ===== Soal 2: Penghitungan Mundur Peluncuran Roket Mini =====
  const soal2 = [];
  for (let i = 5; i >= 1; i--) {
    console.log(i);
    soal2.push(String(i));
  }
  soal2.push("Roket Meluncur!");
  console.log("Roket Meluncur!");

  // ===== Soal 3: Akumulasi Poin Penjualan Harian Kasir =====
  const soal3 = [];
  let jumlahPoin = 0;
  for (let deret = 5; deret > 0; deret--) {
    jumlahPoin += deret;
    const teks = `Kupon: ${deret} | Total poin saat ini: ${jumlahPoin}`;
    console.log(teks);
    soal3.push(teks);
  }

  // ===== Soal 4: Nomor Meja Restoran Kelipatan Genap =====
  const soal4 = [];
  for (let deret = 2; deret < 10; deret += 2) {
    const teks = `Meja VIP nomor: ${deret}`;
    console.log(teks);
    soal4.push(teks);
  }

  // ===== Soal 5: Filter Pesan Peringatan Sistem Keamanan =====
  const soal5 = [];
  for (let i = 0; i <= 6; i++) {
    let teks;
    if (i === 3) {
      teks = "Peringatan: Suhu Mesin Stabil!";
    } else {
      teks = `Indeks: ${i}`;
    }
    console.log(teks);
    soal5.push(teks);
  }

  // ===== Soal 6: Sistem Antrean Loket Pelayanan Bank =====
  const soal6 = [];
  var flag = 1;
  while (flag < 10) {
    const teks = `Memanggil nasabah antrean ke-${flag}`;
    console.log(teks);
    soal6.push(teks);
    flag++; // wajib ada, biar nggak infinite loop
  }

  // ===== Soal 7: Simulasi Pengisian Celengan Tabungan Siswa =====
  const soal7 = [];
  var deret7 = 4;
  let jumlahTabungan = 0;
  while (deret7 > 0) {
    jumlahTabungan += deret7;
    const teks = `Tambah: ${deret7} | Total tabungan saat ini: ${jumlahTabungan}`;
    console.log(teks);
    soal7.push(teks);
    deret7--;
  }

  // ===== Soal 8: Deteksi Kondisi Khusus pada Sensor Parkir Otomatis =====
  const soal8 = [];
  var i8 = 0;
  while (i8 < 5) {
    let teks;
    if (i8 === 3) {
      teks = "Awas Halangan Dekat!";
    } else {
      teks = `Posisi sensor: ${i8}`;
    }
    console.log(teks);
    soal8.push(teks);
    i8++;
  }

  // ===== Soal 9: Investigasi Bug Infinite Looping =====
  const soal9Bug = `var flag = 1;
while (flag < 10) {
  console.log('Iterasi ke-' + flag);
}`;

  const soal9Analisis =
    "Kode di atas infinite loop karena nilai 'flag' TIDAK PERNAH BERUBAH di dalam blok while. " +
    "Kondisi 'flag < 10' dicek terus setiap iterasi, tapi karena flag selalu tetap 1, kondisinya " +
    "selamanya true, jadi loop-nya nggak akan pernah berhenti sendiri.";

  const soal9Fix = `var flag = 1;
while (flag < 10) {
  console.log('Iterasi ke-' + flag);
  flag++; // <- wajib ada supaya flag berubah dan loop bisa berhenti
}`;

  // ===== Soal 10: Pola Undian Pemenang Hadiah =====
  const soal10 = [];
  for (let kupon = 1; kupon <= 10; kupon++) {
    let teks;
    if (kupon % 2 === 0) {
      teks = `Kupon ${kupon}: Kupon Genap`;
    } else {
      teks = `Kupon ${kupon}: Kupon Ganjil`;
    }
    console.log(teks);
    soal10.push(teks);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 1 - Antrean Tiket Bioskop</Text>
        {soal1.map((t, idx) => (
          <Text key={idx} style={styles.value}>{t}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 2 - Hitung Mundur Roket</Text>
        {soal2.map((t, idx) => (
          <Text
            key={idx}
            style={[styles.value, t === "Roket Meluncur!" && { color: "#f97316", fontWeight: "700" }]}
          >
            {t}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 3 - Akumulasi Poin Kasir</Text>
        {soal3.map((t, idx) => (
          <Text key={idx} style={styles.value}>{t}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 4 - Meja VIP Genap</Text>
        {soal4.map((t, idx) => (
          <Text key={idx} style={styles.value}>{t}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 5 - Pemantauan Suhu Mesin</Text>
        {soal5.map((t, idx) => (
          <Text
            key={idx}
            style={[styles.value, t.includes("Peringatan") && { color: "#facc15", fontWeight: "700" }]}
          >
            {t}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 6 - Antrean Loket Bank</Text>
        {soal6.map((t, idx) => (
          <Text key={idx} style={styles.value}>{t}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 7 - Celengan Tabungan Siswa</Text>
        {soal7.map((t, idx) => (
          <Text key={idx} style={styles.value}>{t}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 8 - Sensor Parkir Otomatis</Text>
        {soal8.map((t, idx) => (
          <Text
            key={idx}
            style={[styles.value, t.includes("Awas") && { color: "#ef4444", fontWeight: "700" }]}
          >
            {t}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 9 - Analisis Infinite Loop</Text>
        <Text style={styles.subLabel}>Kode Bermasalah:</Text>
        <Text style={styles.codeBlock}>{soal9Bug}</Text>
        <Text style={styles.subLabel}>Analisis:</Text>
        <Text style={styles.value}>{soal9Analisis}</Text>
        <Text style={styles.subLabel}>Perbaikan:</Text>
        <Text style={styles.codeBlock}>{soal9Fix}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 10 - Undian Kupon Genap/Ganjil</Text>
        {soal10.map((t, idx) => (
          <Text
            key={idx}
            style={[styles.value, { color: t.includes("Genap") ? "#4ade80" : "#60a5fa" }]}
          >
            {t}
          </Text>
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
  subLabel: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 2,
  },
  value: {
    color: "#e2e8f0",
    fontSize: 14,
    marginBottom: 2,
  },
  codeBlock: {
    color: "#a7f3d0",
    fontSize: 12,
    fontFamily: "monospace",
    backgroundColor: "#0b1220",
    padding: 8,
    borderRadius: 6,
    marginBottom: 4,
  },
});
