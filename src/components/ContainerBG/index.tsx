import React from "react";
import { View, Image } from "react-native";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import { styles } from "./styles";

type Props = {
    children: React.ReactNode
}

export const ContainerBG: React.FC<Props> = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerEllipses}>
        <Image source={Ellipse2} style={styles.ellipseTop} />
        <Image source={Ellipse1} style={styles.ellipseBottom} />
      </View>
      <View style={styles.containerBody}>
      {children}
      </View>
    </View>
  );
};
