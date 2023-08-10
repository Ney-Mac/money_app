import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

export const Loader = ({ visible, customStop = false }) => {
    const [stopLoader, setStopLoader] = useState(customStop ?? defaultStop);

    const defaultStop = () => {
        
    }
    
    return (
        <ActivityIndicator animating={visible} />
    )
}