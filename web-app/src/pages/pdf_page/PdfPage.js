import React from "react";
import ReactDOM from "react-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

export default function PdfPage() {
  const styles = StyleSheet.create({
    document: {
      width: "100%",
      height: "100%",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      fontFamily: "Roboto",
      margin: 30,
      textAlign: "center",
      padding: 10,
      flexGrow: 1,
    },
    pdfviewer: {
      width: "1250px",
      height: "1200px",
    },
  });

  return (
    <PDFViewer style={styles.pdfviewer}>
      <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Пример #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Example #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

ReactDOM.render(<PdfPage />, document.getElementById("root"));
