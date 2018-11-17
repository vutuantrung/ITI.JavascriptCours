module BABYLON {
    export class Main {
        public engine: Engine;
        public scene: Scene;

        public camera: FreeCamera;
        public light: PointLight;

        public ground: GroundMesh;
        public skybox: Mesh;

        constructor() {
            var angle = 0.01;
            this.engine = new Engine(<HTMLCanvasElement>document.getElementById('renderCanvas'));

            this.scene = new Scene(this.engine);
            this.scene.enablePhysics(new Vector3(0, -50.81, 0), new CannonJSPlugin());

            this.camera = new FreeCamera('camera', new Vector3(0, 0, 50), this.scene);
            this.camera.attachControl(this.engine.getRenderingCanvas());
            this.camera.setTarget(new Vector3(0, 0, 0));

            this.light = new PointLight('light', new Vector3(1000, 1000, 1000), this.scene);

            //this.ground = <GroundMesh>Mesh.CreateGround('ground', 500, 500, 50, this.scene);
            /*this.ground.physicsImpostor = new PhysicsImpostor(this.ground, PhysicsImpostor.BoxImpostor, {
                mass: 0
            });*/

            //const sunDiameter = 30;
            //const Sun = Mesh.CreateSphere('sphereSun', 32, sunDiameter, this.scene);
            //Sun.position.x = 0;
            //Sun.position.y = 2;

            //this.setupActions(Sun);
            this.skybox = Mesh.CreateBox("skyBox", 500, this.scene, false, Mesh.BACKSIDE);
            var skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMaterial", this.scene);
            skyboxMaterial.reflectionTexture = new CubeTexture("assets/universe", this.scene);
            skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
            skyboxMaterial.disableLighting = true;
            this.skybox.infiniteDistance = true;

            this.skybox.material = skyboxMaterial;

            const sunDiameter = 500;
            const sun = Mesh.CreateSphere('sphereEarth', 32, sunDiameter, this.scene);
            sun.position.x = 0;
            sun.position.y = 0;
            sun.position.z = 0;

            var sunMaterial = new BABYLON.StandardMaterial("ground", this.scene);
            sunMaterial.diffuseTexture = new BABYLON.Texture("assets/sun.jpg", this.scene);
            sun.material = sunMaterial;

            var sunAxis = new BABYLON.Vector3(0, Math.cos(21 * Math.PI / 180), 0);
            this.scene.registerBeforeRender(function () {
                sun.rotate(sunAxis, angle, BABYLON.Space.WORLD);
            });


            // EARTH
            var earthAxis = new BABYLON.Vector3(0, Math.cos(21 * Math.PI / 180), 0);

            const earthDiameter = 30;
            const earth = Mesh.CreateSphere('sphereEarth', 32, earthDiameter, this.scene);
            earth.parent = sun;
            earth.position.x = 400;
            earth.position.y = 0;
            earth.position.z = 400;

            var earthMaterial = new BABYLON.StandardMaterial("ground", this.scene);
            earthMaterial.diffuseTexture = new BABYLON.Texture("assets/earth.jpg", this.scene);
            earth.material = earthMaterial;

            var earthAxis = new BABYLON.Vector3(0, Math.cos(21 * Math.PI / 180), 0);
            this.scene.registerBeforeRender(function () {
                earth.rotate(earthAxis, angle, BABYLON.Space.WORLD);
            })

            // MOON
            const moonDiameter = 4;
            const moon = Mesh.CreateSphere('sphereMoon', 32, moonDiameter, this.scene);
            moon.parent = earth;
            moon.position.x = 20;
            moon.position.y = 0;
            moon.position.z = 20;

            var moonMaterial = new BABYLON.StandardMaterial("ground", this.scene);
            moonMaterial.diffuseTexture = new BABYLON.Texture("assets/moon.jpg", this.scene);
            moon.material = moonMaterial;

            var moonAxis = new BABYLON.Vector3(Math.sin(21 * Math.PI / 180), Math.cos(21 * Math.PI / 180), 0);
            this.scene.registerBeforeRender(function () {
                moon.rotate(moonAxis, angle, BABYLON.Space.WORLD);
            });

            //this.setupActions(earth);
            //this.setupPhysics(earth);
        }

        /**
         * Setup action for the given cube
         */
        public setupActions(cube: Mesh): void {
            cube.actionManager = new ActionManager(this.scene);
            cube.actionManager.registerAction(new ExecuteCodeAction(
                ActionManager.OnLeftPickTrigger,
                (evt) => {
                    const direction = cube.position.subtract(this.scene.activeCamera.position);
                    cube.applyImpulse(direction, new Vector3(0, -1, 0));
                }
            ));
        }

        /**
         * Setup physics for the given cube
         */
        public setupPhysics(cube: Mesh): void {
            cube.physicsImpostor = new PhysicsImpostor(cube, PhysicsImpostor.BoxImpostor, {
                mass: 1,
                restitution: 0
            });
        }

        /**
         * Runs the engine to render the scene into the canvas
         */
        public run() {
            this.engine.runRenderLoop(() => {
                this.scene.render();
            });
        }
    }
}
//file:///D:/Projects/GIT/JavascriptCours/BabylonJS/index.html