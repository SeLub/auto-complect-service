/* eslint-disable react/jsx-fragments */
/* eslint-disable new-cap */

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
      fontFamily: "Roboto",
    },
  });

  return (
    <PDFViewer>
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

// const PDF = () => (
//   <PDFViewer>
//     <PdfPage />
//   </PDFViewer>
// );

ReactDOM.render(<PdfPage />, document.getElementById("root"));
