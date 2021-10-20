/* eslint-disable react/jsx-fragments */
/* eslint-disable new-cap */

import React from "react";
import ReactDOM from "react-dom";
// import ReactPDF from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

const PDF = () => (
  <PDFViewer>
    <PdfPage />
  </PDFViewer>
);

ReactDOM.render(<PDF />, document.getElementById("root"));

export default function PdfPage() {
  const styles = StyleSheet.create({
    document: {
      width: 1128,
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 30,
      padding: 10,
      flexGrow: 1,
    },
    text: {
      fontFamily: "Ford Antenna",
    },
  });
  Font.register({
    family: "Ford Antenna",
    src: `@import url("http://fonts.cdnfonts.com/css/ford-antenna")`,
  });
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Пример #1</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Example #2</Text>
        </View>
      </Page>
    </Document>
  );
}
