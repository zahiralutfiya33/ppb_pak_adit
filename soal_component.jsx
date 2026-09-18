import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
  Modal,
  ActivityIndicator,
  SectionList,
  TouchableOpacity,
  Switch,
} from "react-native";

// ===== Soal 1: Komponen Reusable UserCard =====
function UserCard({ name, status, imageUrl }) {
  return (
    <View style={styles.userCard}>
      <Image source={{ uri: imageUrl }} style={styles.userAvatar} />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userStatus}>{status}</Text>
      </View>
    </View>
  );
}

// ===== Soal 5: Komponen Reusable MyButton (berubah warna sesuai variant) =====
function MyButton({ title, onPress, variant }) {
  const warnaVariant = {
    primary: "#3b82f6", // biru
    success: "#22c55e", // hijau
    danger: "#ef4444", // merah
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.myButton,
        { backgroundColor: warnaVariant[variant] || "#64748b", opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={styles.myButtonText}>{title}</Text>
    </Pressable>
  );
}

// ===== Soal 7: Komponen CustomImage (indikator loading) =====
function CustomImage({ source }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.customImageWrapper}>
      {loading && (
        <ActivityIndicator style={StyleSheet.absoluteFill} size="small" color="#38bdf8" />
      )}
      <Image
        source={source}
        style={styles.customImage}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

export default function scomponent() {
  // ----- Soal 2: LoginForm -----
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ----- Soal 3: Data dummy 50 produk buat FlatList -----
  const daftarProduk = Array.from({ length: 50 }, (_, i) => ({
    id: String(i + 1),
    nama: `Produk ${i + 1}`,
  }));

  // ----- Soal 4: Data kategori (scroll horizontal) -----
  const kategoriMateri = ["Pemrograman", "Jaringan", "Desain UI/UX", "Basis Data", "Cloud"];

  // ----- Soal 6: Modal + ActivityIndicator -----
  const [modalVisible, setModalVisible] = useState(false);
  const handleFetchData = () => {
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000); // simulasi proses selesai setelah 2 detik
  };

  // ----- Soal 8: Data SectionList (nilai per kelompok mapel) -----
  const dataNilai = [
    {
      title: "Mata Pelajaran Kejuruan",
      data: [
        { mapel: "Pemrograman Web", nilai: 90 },
        { mapel: "Basis Data", nilai: 85 },
        { mapel: "Jaringan Komputer", nilai: 88 },
      ],
    },
    {
      title: "Mata Pelajaran Umum",
      data: [
        { mapel: "Matematika", nilai: 80 },
        { mapel: "Bahasa Indonesia", nilai: 87 },
        { mapel: "PPKn", nilai: 90 },
      ],
    },
  ];

  // ----- Soal 9: Pilihan mode (Light/Dark/System) -----
  const opsiMode = ["Light Mode", "Dark Mode", "System Default"];
  const [modeTerpilih, setModeTerpilih] = useState("Light Mode");

  // ----- Soal 10: Switch persetujuan -----
  const [agreed, setAgreed] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Soal 1 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 1 - UserCard (Reusable Component)</Text>
        <UserCard
          name="Budi Santoso"
          status="Aktif"
          imageUrl="https://i.pravatar.cc/100?img=12"
        />
        <UserCard
          name="Siti Aminah"
          status="Alumni"
          imageUrl="https://i.pravatar.cc/100?img=32"
        />
      </View>

      {/* Soal 2 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 2 - LoginForm (Pressable)</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#64748b"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#64748b"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable
          onPress={() => console.log("Login ditekan:", email, password)}
          style={({ pressed }) => [
            styles.loginButton,
            { opacity: pressed ? 0.6 : 1 }, // efek umpan balik visual saat ditekan
          ]}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>

      {/* Soal 3 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 3 - Katalog Produk (FlatList, 50 item)</Text>
        <FlatList
          data={daftarProduk}
          keyExtractor={(item) => item.id}
          style={{ maxHeight: 200 }}
          renderItem={({ item }) => (
            <View style={styles.produkItem}>
              <Text style={styles.value}>{item.nama}</Text>
            </View>
          )}
        />
      </View>

      {/* Soal 4 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 4 - Kategori Horizontal + Artikel Vertikal</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.kategoriScroll}>
          {kategoriMateri.map((kategori, idx) => (
            <View key={idx} style={styles.kategoriChip}>
              <Text style={styles.kategoriText}>{kategori}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView style={styles.artikelScroll} nestedScrollEnabled>
          <Text style={styles.value}>
            Ini adalah konten artikel pembelajaran yang panjang dan bisa digulir secara
            vertikal, terpisah dari daftar kategori di atasnya yang digulir secara horizontal.
            Kombinasi ini sering dipakai di aplikasi pembelajaran atau berita untuk memisahkan
            navigasi kategori dari isi konten utama.
          </Text>
        </ScrollView>
      </View>

      {/* Soal 5 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 5 - MyButton (Variant Warna)</Text>
        <View style={{ gap: 8 }}>
          <MyButton title="Primary" variant="primary" onPress={() => console.log("Primary ditekan")} />
          <MyButton title="Success" variant="success" onPress={() => console.log("Success ditekan")} />
          <MyButton title="Danger" variant="danger" onPress={() => console.log("Danger ditekan")} />
        </View>
      </View>

      {/* Soal 6 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 6 - Modal + ActivityIndicator</Text>
        <Pressable style={styles.fetchButton} onPress={handleFetchData}>
          <Text style={styles.loginButtonText}>Fetch Data</Text>
        </Pressable>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <ActivityIndicator size="large" color="#38bdf8" />
              <Text style={[styles.value, { marginTop: 10 }]}>Memuat data...</Text>
            </View>
          </View>
        </Modal>
      </View>

      {/* Soal 7 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 7 - CustomImage (Loading Indicator)</Text>
        <CustomImage source={{ uri: "https://picsum.photos/200/200" }} />
      </View>

      {/* Soal 8 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 8 - Dashboard Nilai (SectionList)</Text>
        <SectionList
          sections={dataNilai}
          keyExtractor={(item, idx) => item.mapel + idx}
          scrollEnabled={false}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.nilaiRow}>
              <Text style={styles.value}>{item.mapel}</Text>
              <Text style={[styles.value, { fontWeight: "700" }]}>{item.nilai}</Text>
            </View>
          )}
        />
      </View>

      {/* Soal 9 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 9 - Pilihan Mode (Umpan Balik Visual)</Text>
        {opsiMode.map((opsi, idx) => {
          const aktif = opsi === modeTerpilih;
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.opsiItem, aktif && styles.opsiItemAktif]}
              onPress={() => setModeTerpilih(opsi)}
            >
              <Text style={[styles.value, aktif && { color: "#0f172a", fontWeight: "700" }]}>
                {opsi}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Soal 10 */}
      <View style={styles.card}>
        <Text style={styles.label}>Soal 10 - Persetujuan Syarat & Ketentuan</Text>
        <View style={styles.switchRow}>
          <Switch value={agreed} onValueChange={setAgreed} />
          <Text style={[styles.value, { marginLeft: 10, flex: 1 }]}>
            Saya menyetujui Syarat & Ketentuan yang berlaku
          </Text>
        </View>
        <Pressable
          disabled={!agreed}
          style={[styles.submitButton, { opacity: agreed ? 1 : 0.4 }]}
          onPress={() => console.log("Submit ditekan")}
        >
          <Text style={styles.loginButtonText}>Submit</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  content: { padding: 20, paddingBottom: 40 },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#38bdf8",
  },
  label: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  value: { color: "#e2e8f0", fontSize: 14 },

  // Soal 1
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f172a",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  userAvatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12 },
  userName: { color: "#fff", fontWeight: "700", fontSize: 14 },
  userStatus: { color: "#94a3b8", fontSize: 12 },

  // Soal 2
  input: {
    backgroundColor: "#0f172a",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  loginButton: {
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  loginButtonText: { color: "#fff", fontWeight: "700" },

  // Soal 3
  produkItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },

  // Soal 4
  kategoriScroll: { marginBottom: 12 },
  kategoriChip: {
    backgroundColor: "#334155",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
  },
  kategoriText: { color: "#e2e8f0", fontSize: 13 },
  artikelScroll: { maxHeight: 100 },

  // Soal 5
  myButton: { paddingVertical: 12, borderRadius: 8, alignItems: "center" },
  myButtonText: { color: "#fff", fontWeight: "700" },

  // Soal 6
  fetchButton: {
    backgroundColor: "#8b5cf6",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#1e293b",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
  },

  // Soal 7
  customImageWrapper: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  customImage: { width: 120, height: 120, borderRadius: 8 },

  // Soal 8
  sectionHeader: {
    color: "#38bdf8",
    fontWeight: "700",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 4,
  },
  nilaiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  // Soal 9
  opsiItem: {
    backgroundColor: "#0f172a",
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  opsiItemAktif: { backgroundColor: "#38bdf8" },

  // Soal 10
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: "#22c55e",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
});
