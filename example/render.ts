import { Blender } from '../src/index'
import { join } from 'path'

const input  = join(__dirname, '..', '..', '..', 'example', 'model', 'model.blend').replace(/\\/g,"/")
const output = join(__dirname, '..', '..', '..', 'example', 'output', 'output.png').replace(/\\/g,"/")

console.log('starting blender')
const bpy = new Blender()
console.log(`opening file ${input}`)
bpy.ops.wm.open_mainfile({ filepath: input })
bpy.context.scene.render.filepath = output
bpy.context.scene.render.resolution_x = 640
bpy.context.scene.render.resolution_y = 480
bpy.context.scene.cycles.device = 'CPU'
bpy.context.scene.cycles.samples = 32
console.log(`rendering to ${output}...`)
bpy.ops.render.render({ 
    write_still: true, 
    use_viewport: true
})

bpy.dispose()