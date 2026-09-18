import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function MenuIndex() {
  const menuList = [
    { title: '1', path: '/soal/Variable/soal_variable' },
    { title: '2', path: '/soal/Kondisi/soal_kondisi' },
    { title: '3', path: '/soal/Looping/soal_looping' },
    { title: '4', path: '/soal/Array/soal_array' },
    { title: '5', path: '/soal/Fungsi/soal_fungsi' },
    { title: '6', path: '/soal/Component/soal_component' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Tugas PBB</Text>

      <View style={styles.list}>
        {menuList.map((item, idx) => (
          <Link key={idx} href={item.path as any} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F7',
    padding: 24,
    justifyContent: 'flex-start',
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#800000',
  },

  list: {
    gap: 14,
  },

  button: {
    backgroundColor: '#800000',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});