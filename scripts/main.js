Hooks.once('diceSoNiceReady', dice3d => {
    dice3d.addSystem({
        id: "teeth", name: "Teeth",
    }, "preferred");

    dice3d.addColorset({
        name: 'teeth-base',
        category: 'Teeth',
        description: 'Teeth Base Die',
        foreground: '#fff',
        background: '#2c2c2c',
        outline: 'none',
        texture: 'none',
        material: 'metal',
    }, 'preferred');

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_1.webp',
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_2.webp',
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_3.webp',
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_4.webp',
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_5.webp',
            'modules/mouthful-of-teeth-dice/textures/teeth/teeth_dice_6.webp',
        ],
        system: 'teeth',
        colorset: 'teeth-base',
    });

    dice3d.addSystem({
        id: "griftersSmile", name: "Grifter's Smile",
    });

    dice3d.addColorset({
        name: 'gs-base',
        category: 'Teeth',
        description: 'Grifters Die',
        foreground: '#2c2c2c',
        background: '#ffffff',
        outline: 'none',
        texture: 'none',
        material: 'metal',
    }, 'preferred');

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_1.webp',
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_2.webp',
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_3.webp',
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_4.webp',
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_5.webp',
            'modules/mouthful-of-teeth-dice/textures/grifters_smile/grifters_smile_6.webp',
        ],
        system: 'griftersSmile',
        colorset: 'gs-base',
    });

    dice3d.addSystem({
        id: "huntersGrin", name: "Hunter's Grin",
    });

    dice3d.addDicePreset({
        type: 'd6',
        labels: [
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_1.webp',
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_2.webp',
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_3.webp',
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_4.webp',
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_5.webp',
            'modules/mouthful-of-teeth-dice/textures/hunters_grin/hunters_grin_6.webp',
        ],
        system: 'huntersGrin',
        colorset: 'teeth-base',
    });

});
