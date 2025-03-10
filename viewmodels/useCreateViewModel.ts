import { useState } from 'react';
import { GuitarConfig } from '@/models/CreateModels';

export function useCreateViewModel() {
    const [config, setConfig] = useState<GuitarConfig>({
        form: 'EMPEROR',
        scale: '25.5"',
        pickups: 'ACTIVE',
        inlays: 'ТОЧКИ',
        wiring: '',
        price: 166456
    });

    function updateScale(value: string) {
        setConfig((prev) => ({ ...prev, scale: value }));
    }

    function updateWiring(value: string) {
        setConfig((prev) => ({ ...prev, wiring: value }));
    }

    function submitOrder() {
        console.log('Заказ:', config);
    }

    return { config, updateScale, updateWiring, submitOrder };
}
