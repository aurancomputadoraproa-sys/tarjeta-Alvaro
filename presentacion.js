import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";

export default function Presentacion() {
  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      
      {/* Foto */}
      <Image
        source={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8e463d26636f4d9bf83424b1de9ff14b" }}
        style={styles.foto}
      />

      {/* Nombre */}
      <Text style={styles.nombre}>Alvaro</Text>

      {/* Descripción */}
      <Text style={styles.descripcion}>17 años - Estudiante</Text>

      {/* Intereses */}
      <Text style={styles.intereses}>Intereses: Aprobar</Text>

      {/* Redes */}
      <View style={styles.redes}>
        <TouchableOpacity onPress={() => abrirLink("https://www.tiktok.com/@aaalvarour?_r=1&_t=ZS-95aJYwiekP1")}>
          <Text style={styles.link}>TikTok</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirLink("https://instagram.com/uranalvaro_")}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    width: 300,
    marginTop: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  intereses: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
  },
  redes: {
    flexDirection: "row",
    gap: 15,
  },
  link: {
    color: "#4da6ff",
    fontSize: 14,
  },
});