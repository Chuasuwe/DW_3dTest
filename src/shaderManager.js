// ShaderManager：统一管理自定义ShaderMaterial的uniforms动态更新
export class ShaderManager {
  constructor(scene) {
    this.scene = scene
    this.shaderMeshes = new Set()
  }

  // 注册需要管理的ShaderMaterial mesh
  registerShaderMesh(mesh) {
    if (mesh && mesh.material && mesh.material.isShaderMaterial) {
      this.shaderMeshes.add(mesh)
    }
  }

  // 可选：自动遍历scene注册所有ShaderMaterial mesh
  autoRegisterAll() {
    if (!this.scene) return
    this.scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.isShaderMaterial) {
        this.registerShaderMesh(child)
      }
    })
  }

  // 批量更新所有注册mesh的uniforms
  updateUniforms({ now, renderer, mouse }) {
    this.shaderMeshes.forEach(mesh => {
      const uniforms = mesh.material.uniforms
      if (!uniforms) return
      if (uniforms.u_time) uniforms.u_time.value = now
      if (uniforms.u_resolution && renderer) {
        uniforms.u_resolution.value.set(
          renderer.domElement.width,
          renderer.domElement.height
        )
      }
      if (uniforms.u_mouse && mouse) {
        uniforms.u_mouse.value.set(mouse.x, mouse.y)
      }
      // 可扩展更多uniforms
    })
  }
} 